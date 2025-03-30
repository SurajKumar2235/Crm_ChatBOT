
# Get Mass Update Status

#### Purpose

To get the status of the mass update job scheduled previously.

#### Endpoints

[GET /{module\_api\_name}/actions/mass\_update?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-update-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_update?job\_id={job\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Activities, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.mass\_update.READ

(or)

scope=ZohoCRM.mass\_update.{module\_name}.READ

#### Possible module names

leads, accounts, contacts, deals, campaigns, activities, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom

#### Parameters

- job\_idstring, mandatory



Specifies the unique ID of the mass update job obtained in the response of [Mass Update Records](https://www.zoho.com/crm/developer/docs/api/v7/mass-update-records.html).


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Accounts/actions/mass_update?job_id=554023000000506003"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Accounts/actions/mass_update?job_id= 554023000000506003s"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- Statusstring



Indicates the status of mass update. Possible values are "COMPLETED", "SCHEDULED", "RUNNING", and "FAILED".

- Failed\_Countinteger



Specifies the number of records that failed to be mass updated.

- Updated\_Countinteger



Specifies the number of records that were successfully mass updated.

- Not\_Updated\_Countinteger



Specifies the number of records that are not updated yet.

- Total\_Countinteger



Specifies the total number of records that were scheduled to be mass updated


#### Possible Errors

- NOT\_FOUNDHTTP 404



Empty response

**Resolution:** The specified job\_id is not found or invalid. Specify a valid job\_id

- MANDATORY\_NOT\_FOUNDHTTP 400



mandatory param missing

**Resolution:** The parameter "job\_id" is not included in the request

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.mass\_update.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to retrieve mass update status. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records

**Resolution:** The user does not have the permission to retrieve mass update status. Contact your system administrator.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.


#### Sample Response For Job Complete

``` json
CopiedFor Job Completed
{
    "data": [\
        {\
            "Status": "COMPLETED",\
            "Failed_Count": 0,\
            "Updated_Count": 50,\
            "Not_Updated_Count": 0,\
            "Total_Count": 50\
        }\
    ]
}

For Job Failed
{
    "data": [\
        {\
            "Status": "FAILED",\
            "Failed_Count": 50,\
            "Updated_Count": 0,\
            "Not_Updated_Count": 0,\
            "Total_Count": 50\
        }\
    ]
}

For Job Scheduled
{
    "data": [\
        {\
            "Status": "SCHEDULED",\
            "Failed_Count": 0,\
            "Updated_Count": 0,\
            "Not_Updated_Count": 50,\
            "Total_Count": 50\
        }\
    ]
}

For Job In Progress
{
    "data": [\
        {\
            "Status": "RUNNING",\
            "Failed_Count": 0,\
            "Updated_Count": 30,\
            "Not_Updated_Count": 20,\
            "Total_Count": 50\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-update-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)