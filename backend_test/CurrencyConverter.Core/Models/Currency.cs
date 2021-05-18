namespace CurrencyConverter.Core.Models
{
	// public class Currency
	// {
	// 	public Currency(){}
	// 	public Currency(double BaseValue, string from, string to)
	// 	{
	// 		this.BaseValue = BaseValue;
	// 		this.FromCurrency = from;
	// 		this.ToCurrency = to;
	// 	}
	// 	public Currency(double BaseValue, string from, string to, double result) : this(BaseValue, from, to)
	// 	{
	// 		this.Result = result;
	// 	}
	//
	// 	public double BaseValue { get; set; }
	//
    //     public string FromCurrency { get; set; }
	//
    //     public string ToCurrency { get; set; }
	//
    //     public double Result { get; set; }
	// }

	public class Currency
	{
		public Currency(string id, double value)
		{
			this.CurrencyCode = id;
			this.Value = value;
		}
		public string CurrencyCode { get; set; }
		public double Value { get; set; } // Against EUR
	}
}
