using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerBLL
{
    public class FormationBLL
    {

        private TrainingManagerDAL.FormationDAL _DAL;

        public FormationBLL(Servicesdatabase formationsServices)
        {
            _DAL = new TrainingManagerDAL.FormationDAL(formationsServices);
        }
        public Task<List<Formations>> GetAllFormations()
        {
            var data = _DAL.GetFormations();

            return data;
        }
        public Task<Formations?> GetFormationById(string id)
        {
            var data = _DAL.GetFormationById(id);

            return data;
        }
        public Task CreateFormation(Formations newFormation)
        {
            var data = _DAL.CreateFormation(newFormation);

            return data;
        }



    }
}
