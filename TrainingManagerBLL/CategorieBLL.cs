

using Microsoft.Extensions.Options;
using System;
using TrainingManagerDAL.Models;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerBLL
{
    public class CategorieBLL
    {
       
            private TrainingManagerDAL.CategoriesDAL  _DAL;

        public CategorieBLL(Servicesdatabase categoriesServices)
        {
               _DAL = new TrainingManagerDAL.CategoriesDAL(categoriesServices);
            }
            public Task<List<Categories>> GetAllCategories()
            {
                var data = _DAL.GetCategories();

                return data;
            }

        public Task<Categories> GetCategoriesById(string id)
        {
            var data = _DAL.GetCategoriesById(id);

            return data;
        }

        public Task CreateCategorie(Categories newCategorie)
        {
            var data =  _DAL.CreateCategorie(newCategorie);

            return data;
        }

        public Task UpdateCategorie(string id,  Categories updateCategorie)
        {
            var data = _DAL.UpdateCategorie(id ,updateCategorie);

            return data;
        }

        public Task RemoveCategorie(string id)
        {
            var data = _DAL.RemoveCategorie(id);

            return data;
        }

    }
}
