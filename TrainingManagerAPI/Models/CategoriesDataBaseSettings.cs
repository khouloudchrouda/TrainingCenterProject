namespace TrainingManagerAPI.Models
{
    public class CategoriesDataBaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CategoriesCollectionName { get; set; } = null!;
    }
}
