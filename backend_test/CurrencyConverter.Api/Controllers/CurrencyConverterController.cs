using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CurrencyConverter.Core;
using CurrencyConverter.Core.Models;

using CurrencyConverter.Services;
using CurrencyConverter.Repository;

namespace CurrencyConverter.Api.Controllers
{
	public class ConversionPostContent
	{
		public double value { get; set; }
		public string fromCurrency { get; set; }
		public string toCurrency { get; set; }
	}
    [ApiController]
    [Route("api/[controller]")]
    public class CurrencyConverterController : ControllerBase
    {

        // UnitOfWork unitOfWork = new UnitOfWork();
        private static RepositoryConnection connection = new RepositoryConnection();
        private static CurrencyService service = new CurrencyService();

        [HttpGet("currencies")]
        public List<Currency> GetAllCurrencies()
        {
            return service.GetAllCurrencies(connection.GetCurrencies());
        }

        [HttpGet("currencies/{baseCurrency}")]
        public Currency GetCurrency(string baseCurrency)
        {
            return service.GetCurrency(connection.GetCurrencies(), baseCurrency);
        }

        [HttpPost("currencies")]
        public CurrencyDTO GetConversion(ConversionPostContent requestContent)
        {
            var dto = new CurrencyDTO{
                BaseValue = requestContent.value,
                ToCurrency = requestContent.toCurrency,
                FromCurrency = requestContent.fromCurrency
            };
            // return service.GetCurrencyConversion(connection.GetCurrencies(), requestContent.fromCurrency, requestContent.toCurrency, requestContent.value);
            return service.GetCurrencyConversion(connection.GetCurrencies(), dto);
        }


        [HttpGet("currencies/historic/{days}")]
        public List<Currency> GetHistoric(int days)
        {
            return service.GetAllCurrencies(connection.GetHistoricRates(days));
        }
    }
}
