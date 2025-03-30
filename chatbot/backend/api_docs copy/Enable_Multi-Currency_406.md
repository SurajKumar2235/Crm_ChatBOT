
# Multiple Currencies in Organization

The multi-currency support in Zoho CRM helps you to handle business and transactions in the global market effortlessly. With the multi-currency feature you can:

- Estimate the value of a deal in your home currency as well as in your customer's local currency
- Generate and view any report (with figures in other currencies) in your home currency
- Import reports with figures in multiple currencies

### Using Multiple Currencies

The Administrator of your organization's CRM account must add the home currency and other currencies before other profile users start using them. The system stores the currency specified in input JSON as your home currency. Although you can edit the properties of your home currency, you **cannot change it**. To know how to update currencies refer to [Update Currencies](https://www.zoho.com/crm/developer/docs/api/v7/update-currencies.html).

#### Purpose

To enable multiple currencies for your organization.

#### Endpoints

[POST /org/currencies/actions/enable](https://www.zoho.com/crm/developer/docs/api/v7/enable-multi-currency.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/org/currencies/actions/enable

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.currencies.CREATE

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/org/currencies/actions/enable"
-X POST
-d "input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
CopiedformatMap = Map();
formatMap.put("decimal_separator", "Period");
formatMap.put("thousand_separator", "Comma");
formatMap.put("decimal_places", "2");

currencyMap = Map();
currencyMap.put("format", formatMap);
currencyMap.put("prefix_symbol", true);
currencyMap.put("name", "Algerian Dinar-ADN");
currencyMap.put("iso_code", "DZD");
currencyMap.put("symbol", "DA");
currencyMap.put("exchange_rate", "1.0000000");

params = Map();
params.put("base_currency", currencyMap);

response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/org/currencies/actions/enable"\
	type :POST\
	parameters: params.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

Show full

Show less

In the request, "@input.json" contains the sample input data.

#### Request JSON Keys

- prefix\_symbolboolean, optional



Represents the position of the ISO code in the currency.

**Possible Values:**

**true:** Display ISO code before the currency value.

**false:** Display ISO code after the currency value.

- namestring, mandatory



Represents the name of the currency.

- iso\_codestring, mandatory



Represents the ISO code of the currency.

- symbolstring, optional



Represents the symbol of the currency.

- exchange\_ratestring, mandatory



Represents the rate at which the currency has to be exchanged for home currency.

- is\_activeboolean, optional



Represents the status of the currency.

**Possible Values:**

**true:** The currency is active.

**false:** The currency is inactive.

- formatboolean, optional



Represents the format of the base currency with details like decimal\_separator, thousand\_separator, and decimal\_places.






### Keys to be specified in format JSON Object


  - decimal\_separatorstring, optional



    The decimal separator separates the integer part of the currency from its fractional part. It can be a **Period** or **Comma**, depending on the currency.

  - thousand\_separatorstring, optional



    The thousand separator separates groups of thousands in a currency. It can be a **Period**, **Comma**, or **Space**, depending on the currency.

  - decimal\_placesinteger, optional



    Represents the number of decimal places allowed for the currency. It can be **0**, **2**, or **3**.

#### Sample Input

``` json
Copied{
  "base_currency": {
    "format": {
      "decimal_separator": "Period",
      "thousand_separator": "Comma",
      "decimal_places": "2"
    },
    "prefix_symbol": true,
    "name": "Algerian Dinar - DZD",
    "iso_code": "DZD",
    "symbol": "DA",
    "exchange_rate": "1.0000000"
  }
}
```

#### Possible Errors

- ALREADY\_ENABLEDHTTP 400



The multi-currency is already enabled

**Resolution:** The multi-currency feature has already been enabled for your organization. You cannot enable it again.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL has syntactical errors.

- INVALID\_DATAHTTP 400



Currency name is invalid

**Resolution:** You have specified an invalid currency name. Go to setup> Company Details> Under Currencies tab> Click Add> The Currency picklist will have valid currency names and ISO codes.

- INVALID\_DATAHTTP 400



ISO code is invalid

**Resolution:** You have specified an invalid ISO Code. Go to setup> Company Details> Under Currencies tab> Click Add> The Currency picklist will have valid currency names and ISO codes.

- INVALID\_DATAHTTP 400



Currency symbol is invalid

**Resolution:** You have specified an invalid currency symbol.

- FEATURE\_NOT\_SUPPORTEDHTTP 403



The multi-currency feature is not available except the Enterprise and higher editions

**Resolution:** The multi-currency feature is only available in Enterprise and Ultimate editions.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found

**Resolution:** Refer to Request JSON section above and specify all the mandatory keys in the input

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.currencies.CREATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to enable multi-currency. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to enable multi-currency.

**Resolution:** The user does not have the permission to enable multi-currency. Contact your system administrator.


#### Sample Response

``` json
Copied{
  "base_currency": {
    "code": "SUCCESS",
    "details" {
      "id": "111113000000038990"
    },
    "message": "The multi-currency feature is enabled and given currency is created as the base currency.",
    "status": "success"
  }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/enable-multi-currency.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)