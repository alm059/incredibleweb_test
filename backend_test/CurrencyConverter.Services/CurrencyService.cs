using System;
using System.Collections.Generic;
using CurrencyConverter.Core.Repositories;
using CurrencyConverter.Core.Services;
using CurrencyConverter.Core.Models;
using System.Threading.Tasks;
using System.Threading;
using System.Globalization;

namespace CurrencyConverter.Services
{
	public class CurrencyService : ICurrencyService
	{
		public List<Currency> GetAllCurrencies(Task<Dictionary<string, string>> data){
			List<Currency> list = new List<Currency>();
			Thread.CurrentThread.CurrentCulture = new CultureInfo("en-gb");
			foreach(KeyValuePair<string, string> entry in data.Result)
			{
				list.Add(new Currency(entry.Key, Convert.ToDouble(entry.Value)));
			}
			return list;
		}
		public Currency GetCurrency(Task<Dictionary<string, string>> data, string id){
			Thread.CurrentThread.CurrentCulture = new CultureInfo("en-gb");
			foreach(KeyValuePair<string, string> entry in data.Result)
			{
				if(entry.Key.Equals(id))
				{
					return new Currency(entry.Key, Convert.ToDouble(entry.Value));
				}
			}
			return null;
		}
		public Currency GetHistoricCurrency(Task<Dictionary<string, string>> data, string id){
			Thread.CurrentThread.CurrentCulture = new CultureInfo("en-gb");
			foreach(KeyValuePair<string, string> entry in data.Result)
			{
				if(entry.Key.Equals(id))
				{
					return new Currency(entry.Key, Convert.ToDouble(entry.Value));
				}
			}
			return null;
		}
		public CurrencyDTO GetCurrencyConversion(Task<Dictionary<string, string>> data, CurrencyDTO dto){
			Thread.CurrentThread.CurrentCulture = new CultureInfo("en-gb");
			double fromValue = 0.0;
			double toValue = 0.0;
			foreach(KeyValuePair<string, string> entry in data.Result)
			{
				if(entry.Key.Equals(dto.FromCurrency))
				{
					fromValue = Convert.ToDouble(entry.Value);
				}
				if(entry.Key.Equals(dto.ToCurrency))
				{
					toValue = Convert.ToDouble(entry.Value);
				}
			}
			dto.Result = (dto.BaseValue / fromValue) * toValue;
			return dto;
		}
	}
}
