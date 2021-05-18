using System.Collections.Generic;
using CurrencyConverter.Core.Models;
using System.Threading.Tasks;

namespace CurrencyConverter.Core.Services
{
	public interface ICurrencyService
	{
		List<Currency> GetAllCurrencies(Task<Dictionary<string, string>> data);
		Currency GetCurrency(Task<Dictionary<string, string>> data, string id);
		Currency GetHistoricCurrency(Task<Dictionary<string, string>> data, string id);
		// CurrencyDTO GetCurrencyConversion(Task<Dictionary<string, string>> data, string from, string to, double value);
		CurrencyDTO GetCurrencyConversion(Task<Dictionary<string, string>> data, CurrencyDTO dto);
	}
}
