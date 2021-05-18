using System;

namespace CurrencyConverter.Api
{
    public class CurrencyConverter
    {
        public double BaseValue { get; set; }

        public string FromCurrency { get; set; }

        public string ToCurrency { get; set; }

        public double Result { get; set; }
    }
}
