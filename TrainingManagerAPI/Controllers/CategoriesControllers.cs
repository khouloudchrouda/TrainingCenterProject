using Microsoft.AspNetCore.Mvc;
using TrainingManagerDAL;
using TrainingManagerDAL.Repository.Entities;
using TrainingManagerDAL.Repository.Services;

namespace TrainingManagerAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{

    private TrainingManagerBLL.CategorieBLL _Bll;

    public CategoriesController(Servicesdatabase categoriesServices)
    {
        _Bll = new TrainingManagerBLL.CategorieBLL(categoriesServices);
    }

    [HttpGet]
    public Task<List<Categories>> GetAllCategories()
    {
        return _Bll.GetAllCategories();

    }

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Categories>> Get(string id)
    {
        var categorie = await _Bll.GetCategoriesById(id);

        if (categorie is null)
        {
            return NotFound();
        }

        return categorie;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Categories newCategorie)
    {
        await _Bll.CreateCategorie(newCategorie);

        return CreatedAtAction(nameof(Get), new { id = newCategorie.Id }, newCategorie);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Categories updatedCategorie)
    {
        var categorie = await _Bll.GetCategoriesById(id);

        if (categorie is null)
        {
            return NotFound();
        }

        updatedCategorie.Id = categorie.Id;

        await _Bll.UpdateCategorie(id, updatedCategorie);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {

        var categorie = await _Bll.GetCategoriesById(id);

        if (categorie is null)
        {
            return NotFound();
        }

        await _Bll.RemoveCategorie(id);

        return Ok(categorie);
    }
}