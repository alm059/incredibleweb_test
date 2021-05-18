using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Collections.Generic;
using CurrencyConverter.Core.Models;
using CurrencyConverter.Core.Repositories;
using Newtonsoft.Json;

namespace CurrencyConverter.Repository
{
	public class CurrencyRequest
    {
        public bool success { get; set; }
        public int timestamp { get; set; }
        public string date { get; set; }
        public Dictionary<string, string> rates { get; set; }
    }
	public class RepositoryConnection : IRepositoryConnection
	{
		private static readonly HttpClient client = new HttpClient();
		private static string key = "8895383d74def5f8275c300c79895605";


		public async Task<Dictionary<string, string>> GetCurrencies(){
			try
			{
				client.DefaultRequestHeaders.Accept.Clear();
				client.DefaultRequestHeaders.Accept.Add(
					new MediaTypeWithQualityHeaderValue("application/json"));

				Task<string> stringTask = client.GetStringAsync("http://data.fixer.io/api/latest?access_key=" + key);
				string jsonString = await stringTask;
				CurrencyRequest json = JsonConvert.DeserializeObject<CurrencyRequest>(jsonString);

				return json.rates;
			}catch (Exception e)
			{
				Console.WriteLine(e.Message);
				throw e;
			}
		}
		public async Task<Dictionary<string, string>> GetHistoricRates(int days){
			try
			{
				client.DefaultRequestHeaders.Accept.Clear();
				client.DefaultRequestHeaders.Accept.Add(
					new MediaTypeWithQualityHeaderValue("application/json"));

				string date = DateTime.Now.AddDays(0-days).ToString("yyyy-MM-dd");
				Task<string> stringTask = client.GetStringAsync("http://data.fixer.io/api/" + date + "?access_key=" + key);
				string jsonString = await stringTask;
				CurrencyRequest json = JsonConvert.DeserializeObject<CurrencyRequest>(jsonString);

				return json.rates;
			}catch (Exception e)
			{
				Console.WriteLine(e.Message);
				throw e;
			}
		}
	}
}
