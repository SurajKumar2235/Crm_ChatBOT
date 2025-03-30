
# Get List of Deleted Records

#### Purpose

To get the list of deleted records.

#### Endpoints

[GET /{module\_api\_name}/deleted](https://www.zoho.com/crm/developer/docs/api/v7/get-deleted-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/deleted

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Custom, Appointments, Appointments Rescheduled History, Services and Activities

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

If-Modified-Since: Use this header to get the list of recently modified records. Example: 2019-07-25T15:26:49+05:30

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, appointments\_rescheduled\_history, services and activities

#### Possible operation types

ALL - Full access to the record

READ - Get records in the module

#### Parameters

- typestring, optional



Specify the type of deleted records you want to retrieve.

**Possible values -**



- **all**: To get the list of all deleted records. This is the **default** value.
- **recycle**: To get the list of deleted records from recycle bin.
- **permanent**: To get the list of permanently deleted records.


- pageinteger, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive integers only

- per\_pageinteger, optional



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values:** Positive integers only


**Note**

- The **page** and **per\_page** parameter is used to fetch records according to their position in the CRM. Let's assume that the user has to fetch 400 records. The maximum number of records that one can get for an API call is 200. So, for records above the 200th position, they cannot be fetched. By using the page (1, 2) and per\_page (200) parameter, the user can fetch all 400 records using 2 API calls.
- Using this API, you can fetch records that have been temporarily deleted or moved to the recycle bin up to 60 days from the date of deletion. Similarly, records that have been permanently deleted can be retrieved up to 120 days from the date of deletion.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/deleted?type=all"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/deleted?type=all"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON keys

- deleted\_byJSON object



Represents the name and ID of the user who deleted the current record.

- idstring



Represents the unique ID of the deleted record.

- display\_namestring



Represents the display name of the deleted record.

- typestring



Represents the type of the deleted record. The value can be: all, recycle, or permanent.

- created\_byJSON object



Represents the name and ID of the user who created the current record.

- deleted\_timestring



Represents the date and time at which the record was deleted.


#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- INVALID\_MODULEHTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to retrieve deleted records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read records

**Resolution:** The user does not have the permission to retrieve deleted records. Contact your system administrator.

- PATTERN\_NOT\_MATCHEDHTTP 400



Please check whether the input values are correct

**Resolution:** The value specified for the 'type' parameter is incorrect. Refer to parameters section above and specify a valid parameter value.

- NO CONTENTHTTP 204



No Content

**Resolution:** There are no records available. Please refer the notes section to check the timeframe limits in which you can fetch the deleted records.


#### Sample Response

``` json
Copied{
    "data": [\
       {\
            "deleted_by": {\
                "name": "Patricia Boyle",\
                "id": "410888000000086001"\
            },\
            "id": "410888000000099071",\
            "display_name": "Patricia",\
            "type": "recycle",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "410888000000086001"\
            },\
            "deleted_time": "2015-06-19T11:19:38+05:30"\
        },\
       {\
            "deleted_by": {\
                "name": "Patricia Boyle",\
                "id": "410888000000086001"\
            },\
            "id": "410888000000094004",\
            "display_name": "Patricia",\
            "type": "recycle",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "410888000000086001"\
            },\
            "deleted_time": "2015-04-07T17:43:33+05:30"\
        },\
       {\
            "deleted_by": null,\
            "id": "410888000000680013",\
            "display_name": null,\
            "type": "permanent",\
            "created_by": null,\
            "deleted_time": "2016-10-26T11:44:15+05:30"\
        },\
       {\
            "deleted_by": null,\
            "id": "410888000000680009",\
            "display_name": null,\
            "type": "permanent",\
            "created_by": null,\
            "deleted_time": "2016-10-26T11:44:15+05:30"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 4,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-deleted-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)