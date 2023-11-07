
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TrainingManagerDAL.Models;
using TrainingManagerDAL.Repository.Entities;

namespace TrainingManagerDAL.Repository.Services
{
    public class Servicesdatabase
    {

        public readonly IMongoCollection<Categories> _categoriesCollection;
        public readonly IMongoCollection<Formations> _formationsCollection;

        public Servicesdatabase(IOptions<DataBaseSettings> categoriesDataBaseSettings)
        {
            var mongoClient = new MongoClient(
                categoriesDataBaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                categoriesDataBaseSettings.Value.DatabaseName);

            _categoriesCollection = mongoDatabase.GetCollection<Categories>("Categories");
            _formationsCollection = mongoDatabase.GetCollection<Formations>("Formations");
        }
    }
}
