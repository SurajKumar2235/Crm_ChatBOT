
# Get Mass Inventory Conversion Status

#### Purpose

To know the status of the mass conversion job previously scheduled through the [Mass Inventory Convert API](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-convert.html).

#### Endpoints

[GET /Quotes/actions/mass\_convert?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-conversion-status-api.html)

[GET /Sales\_Orders/actions/mass\_convert?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-conversion-status-api.html)

### Request Details

#### Request URLs

###### **To get the status of converted Quote  records:**

{api-domain}/crm/{version}/Quotes/actions/mass\_convert?job\_id={job\_id}

###### **To get the status of converted Sales Order records :**

{api-domain}/crm/{version}/Sales\_Orders/actions/mass\_convert?job\_id={job\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_convert.{module\_api\_name}.READ

**Note:** Specify the API name of the _parent module_.

#### Possible module names

Quotes, and Sales Orders

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Quotes/actions/mass_convert?job_id=2423488000000626117"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Parameter

- job\_idstring, mandatory



It represents the unique ID of your scheduled job.


#### Response JSON Keys

- total\_countinteger



Specifies the total number of records that were scheduled to be converted.

- not\_converted\_Countinteger



Specifies the number of records that are yet to be converted.

- failed\_countinteger



Specifies the number of records that failed to convert.

- converted\_countinteger



Specifies the number of records that were converted.

- statusstring



Indicates the status of the conversion job. Possible values are **COMPLETED**, **SCHEDULED**, **IN PROGRESS**, and **FAILED.**


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "total_count": 10,\
            "not_converted_count": 0,\
            "failed_count": 0,\
            "converted_count": 10,\
            "status": "COMPLETED"\
        }\
    ]
}
```

#### Possible Errors

- REQUIRED\_PARAM\_MISSING HTTP 400



Required parameter is missing.

**Resolution:** The **job\_id** parameter is missing. Specify a valid **job\_id**.

- INVALID\_DATAHTTP 400



The job\_id is invalid.

**Resolution:** Specify a valid job ID.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name.

Specify a valid module name.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **Zohocrm.mass\_convert.Quotes.READ**(or) **Zohocrm.mass\_convert.SalesOrders.READ.**

Generate a valid token with the valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-inventory-conversion-status-api.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)