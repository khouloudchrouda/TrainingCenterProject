using Microsoft.AspNetCore.Mvc;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerAPI.Controllers
{
    [ApiController]
    [Route("api/Formations")]
    public class FormationsControllers : ControllerBase
    {
        private TrainingManagerBLL.FormationBLL _Bll;

        public FormationsControllers(Servicesdatabase formationService)
        {
            _Bll = new TrainingManagerBLL.FormationBLL(formationService);
        }

        [HttpGet]
        public Task<List<Formations>> GetAllCategories()
        {
            return _Bll.GetAllFormations();

        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Formations>> Get(string id)
        {
            var formation = await _Bll.GetFormationById(id);

            if (formation is null)
            {
                return NotFound();
            }

            return formation;
        }

        [HttpPost]
        public async Task<IActionResult> Post(Formations newFormation)
        {
            await _Bll.CreateFormation(newFormation);

            return CreatedAtAction(nameof(Get), new { id = newFormation.Id }, newFormation);
        }



    }
}
