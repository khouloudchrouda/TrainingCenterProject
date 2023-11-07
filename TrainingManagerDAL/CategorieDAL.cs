using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TrainingManagerDAL;
using TrainingManagerDAL.Models;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerDAL;

public class CategoriesDAL
{
    public readonly IMongoCollection<Categories> _categoriesCollection;


    public CategoriesDAL(Servicesdatabase categoriesServices)
    {
        _categoriesCollection = categoriesServices._categoriesCollection;
   
    }
    public async Task<List<Categories>> GetCategories() =>
            await _categoriesCollection.Find(_ => true).ToListAsync();

    public async Task<Categories?> GetCategoriesById(string id) =>
        await _categoriesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateCategorie(Categories newCategorie) =>
        await _categoriesCollection.InsertOneAsync(newCategorie);

    public async Task UpdateCategorie(string id, Categories updatedCategorie) =>
        await _categoriesCollection.ReplaceOneAsync(x => x.Id == id, updatedCategorie);

    public async Task RemoveCategorie(string id) =>
        await _categoriesCollection.DeleteOneAsync(x => x.Id == id);

}
