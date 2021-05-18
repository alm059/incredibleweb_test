using System.Collections.Generic;
using CurrencyConverter.Core.Models;
using System.Threading.Tasks;

namespace CurrencyConverter.Core.Repositories
{
	public interface IRepositoryConnection
	{
		Task<Dictionary<string, string>> GetCurrencies();
		Task<Dictionary<string, string>> GetHistoricRates(int days);
	}
}
