using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace TrainingManagerAPI.Models
{
    public class Categories
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; } = null!;

        public decimal Code { get; set; }

        public string Description { get; set; } = null!;

        public bool Visible { get; set; } = false;

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
