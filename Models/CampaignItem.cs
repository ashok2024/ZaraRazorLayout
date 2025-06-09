namespace ZaraBlazorStandlone.Models
{
    public class CampaignItem
    {
        public string Title { get; set; }
        public string CreatedBy { get; set; }
        public string Number { get; set; }
        public string CampaignReference { get; set; }
        public DateTime DeliveryDate { get; set; }
        public decimal Price { get; set; }
        public int NoOfItems { get; set; }
        public int DeliveryPoints { get; set; }
        public DateTime LastTracked { get; set; }
        public string Status { get; set; }
        public bool IsClearanceEvent { get; set; }
        public string CampaignNumber { get; set; }
        public int DeliveryPercentage { get; set; }
        public DateTime LastTrackedDate { get; set; }
        public string TrackingStatus { get; set; }
    }
}
