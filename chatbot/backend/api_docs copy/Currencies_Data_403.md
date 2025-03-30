
# Get Currencies

#### Purpose

To get all the available currencies in your organization.

#### Endpoints

[GET /org/currencies](https://www.zoho.com/crm/developer/docs/api/v7/get-currencies-data.html)

[GET /org/currencies/{currency\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-currencies-data.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/org/currencies

**To get a specific currency:**

{api-domain}/crm/{version}/org/currencies/{currency\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.currencies.{operation\_type}

#### Possible operation types

READ - Get currencies data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/org/currencies"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/org/currencies"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- symbolstring



Represents the symbol of the current currency. For instance, '₹'.

- created\_timestring



Represents the date and time at which the currency was created.

- is\_activeboolean



Represents if the currency is active.

**true:** The currency is active.

**false:** The currency is inactive.

- exchange\_ratedouble



Represents the exchange rate of the currency.

- formatJSON object



Represents the format of the currency with details like decimal\_separator, thousand\_separator, and decimal\_places.

- created\_byJSON object



Represents name and ID of the user who created the currency.

- prefix\_symbolboolean



Represents if the currency has a prefix symbol.

**true:** The currency has a prefix symbol.

**false:** The currency does not have a prefix symbol.

- is\_baseboolean



Represents if the currency is the base currency.

**true:** The current currency is the base currency.

**false:** The current currency is not the base currency.

- modified\_timestring



Represents the date and time at which the currency was last modified.

- namestring



Represents the name of the currency.

- modified\_byJSON object



Represents the name and ID of the user who last modified the currency details.

- idstring



Represents the unique ID of the currency.

- iso\_codestring



Represents the ISO code of the currency.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL has syntactical errors.

- FEATURE\_NOT\_SUPPORTEDHTTP 403



The multi-currency feature is not available except the Enterprise and higher editions

**Resolution:** The multi-currency feature is only available in Enterprise and Ultimate editions.

- CURRENCIES\_NOT\_ENABLEDHTTP 403



Multi currency is not enabled

**Resolution:** You have not enabled other currencies for your organization. Goto Setup> Company Details> Currencies and enable it.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.currencies.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read currencies data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read currencies data.

**Resolution:** The user does not have the permission to read currencies data. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "currencies": [\
        {\
            "symbol": "DA",\
            "created_time": "2019-11-08T14:24:56+05:30",\
            "is_active": true,\
            "exchange_rate": "3.000000000",\
            "format": {\
                "decimal_separator": "Period",\
                "thousand_separator": "Comma",\
                "decimal_places": "2"\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "prefix_symbol": true,\
            "is_base": true,\
            "modified_time": "2019-11-08T14:48:03+05:30",\
            "name": "Algerian Dinar - DZD",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "id": "4150868000000780002",\
            "iso_code": "DZD"\
        },\
        {\
            "symbol": "₹",\
            "created_time": "2019-11-08T14:29:22+05:30",\
            "is_active": true,\
            "exchange_rate": "1.000000000",\
            "format": {\
                "decimal_separator": "Period",\
                "thousand_separator": "Comma",\
                "decimal_places": "2"\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "prefix_symbol": true,\
            "is_base": false,\
            "modified_time": "2019-11-08T14:29:22+05:30",\
            "name": "Indian Rupee - INR",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "id": "4150868000000779003",\
            "iso_code": "INR"\
        },\
        {\
            "symbol": "$",\
            "created_time": "2019-11-08T14:45:26+05:30",\
            "is_active": true,\
            "exchange_rate": "3.000000000",\
            "format": {\
                "decimal_separator": "Period",\
                "thousand_separator": "Comma",\
                "decimal_places": "2"\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "prefix_symbol": true,\
            "is_base": false,\
            "modified_time": "2019-11-08T14:53:02+05:30",\
            "name": "US Dollar - USD",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "4150868000000225013"\
            },\
            "id": "4150868000000780008",\
            "iso_code": "USD"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-currencies-data.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)