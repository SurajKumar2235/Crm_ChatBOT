
# Update Currencies

#### Purpose

To update currency details.

#### Endpoints

[PUT /org/currencies/actions/enable](https://www.zoho.com/crm/developer/docs/api/v7/update-currencies.html)

[PUT /org/currencies](https://www.zoho.com/crm/developer/docs/api/v7/update-currencies.html)

[PUT /org/currencies/{currency\_ID}](https://www.zoho.com/crm/developer/docs/api/v7/update-currencies.html)

### Request Details

#### Request URL

**To update home currency:**

{api-domain}/crm/{version}/org/currencies/actions/enable

**To update currencies other than home currency:**

{api-domain}/crm/{version}/org/currencies

**To update a specific currency:**

{api-domain}/crm/{version}/org/currencies/{currency\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.currencies.{operation\_type}

#### Possible operation types

UPDATE - Update currencies data

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/org/currencies/actions/enable"
-X PUT
-d input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

In the request, "@input.json" contains the sample input data.

**Note**

- The name and ISO code of the currencies are defined and cannot be updated.

#### Request JSON

- idstring, mandatory



Specify the unique ID of the currency. Refer to [Get Currencies API](https://www.zoho.com/crm/developer/docs/api/v7/get-currencies-data.html) for more details.

- prefix\_symbolboolean, optional



Represents the position of the ISO code in the currency.

**Possible values**:

**true:** Display ISO code before the currency value.

**false:** Display ISO code after the currency value.

- namestring, optional



Represents the name of the currency.

- iso\_codestring, optional



Represents the ISO code of the currency.

- symbolstring, optional



Represents the symbol of the currency.

- exchange\_ratestring, optional



Represents the rate at which the currency has to be exchanged for home currency.

- is\_activeboolean, optional



Represents the status of the currency.

**Possible values**:

**true:** The currency is active.

**false:** The currency is inactive.

- formatJSON object, optional



Represents the format of the base currency with details like decimal\_separator, thousand\_separator, and decimal\_places.


#### Keys to be specified in format JSON Object

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
        "symbol": "Af",
        "format": {
            "decimal_separator": "Period",
            "thousand_separator": "Comma",
            "decimal_places": "3"
        },
        "prefix_symbol": true,
        "id": "111113000000038990",
        "exchange_rate": "1.0000000"
    }
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL has syntactical errors.

- INVALID\_DATAHTTP 400



ID is invalid

**Resolution:** You have specified an invalid currency ID.

- INVALID\_DATAHTTP 400



Currency symbol is invalid.

**Resolution:** You have specified an invalid currency symbol.

- FEATURE\_NOT\_SUPPORTEDHTTP 403



The multi-currency feature is not available except the Enterprise and higher editions.

**Resolution:** The multi-currency feature is only available in Enterprise and Ultimate editions.

- FEATURE\_NOT\_ENABLEDHTTP 403



The multi-currency feature is not enabled.

**Resolution:** You can update currencies only after enabling the multi-currency feature. Refer to [Enable Multi-Currency](https://www.zoho.com/crm/developer/docs/api/v7/enable-multi-currency.html).

- NOT\_ALLOWEDHTTP 400



Thousand separator and decimal separator should not be equal

**Resolution:** Specify different separators for thousands and decimals.

- NOT\_ALLOWEDHTTP 400



Base currency ID is not allowed here

**Resolution:** You cannot update the base currency values.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required field not found.

**Resolution:** Specify the unique ID of the currency in the input. Refer to [Get Currencies API](https://www.zoho.com/crm/developer/docs/api/v7/get-currencies-data.html) to get the unique ID of a currency.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.settings.currencies.UPDATE scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to update

**Resolution:** The user does not have permission to update currencies. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to update currencies.

**Resolution:** The user does not have the permission to update currencies. Contact your system administrator.


#### Sample Response

``` json
Copied{
    "base_currency": {
        "code": "SUCCESS",
        "details": {
            "id": "4150868000000780002"
        },
        "message": "The currency updated successfully",
        "status": "success"
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-currencies.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)