using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerDAL
{
    public class FormationDAL
    {
        public readonly IMongoCollection<Formations> _formationCollection;


        public FormationDAL(Servicesdatabase categoriesServices)
        {
            _formationCollection = categoriesServices._formationsCollection;

        }
        public async Task<List<Formations>> GetFormations() =>
                await _formationCollection.Find(_ => true).ToListAsync();

        public async Task<Formations?> GetFormationById(string id) =>
        await _formationCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateFormation(Formations newFormation) =>
            await _formationCollection.InsertOneAsync(newFormation);

    }
}
