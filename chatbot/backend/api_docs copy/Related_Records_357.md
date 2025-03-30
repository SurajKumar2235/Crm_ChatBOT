
# Related Records Data

A record usually contains additional information such as notes, attachments, products, deals, contacts, etc. Using related lists API, you can retrieve all the related list information.

### Get Related Records

#### Purpose

To get the related list records.

#### Endpoints

[GET /{module\_api\_name}/{record\_id}/{related\_list\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{record\_id}/{related\_list\_api\_name}

#### Supported relations

All modules and their relations are supported. You can use the endpoint in the **href** attribute in the response of the [Related List Meta data API](https://www.zoho.com/crm/developer/docs/api/v7/related-list-meta.html) to fetch the records from the related lists of a module.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

If-Modified-Since: Use this header to get the list of recently modified records. Example: 2019-07-25T15:26:49+05:30

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, custom, appointments, appointments\_rescheduled\_history, and services.

#### Possible operation types

ALL - Full access to related records

READ - Read related records

#### Parameters

- fieldsstring, mandatory



Specify the API name of the field whose details you want to receive in the response.

- pageinteger, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- per\_pageinteger, optional



To get the list of records available per page. The default and the maximum possible value is **200**.

**Possible values:** Positive Integer values only.

- page\_tokenstring, mandatory to fetch more than 2000 records by pagination



You can use the "page" param to fetch up to 2000 records without "page\_token". To fetch more than 2000 records, you must include the "page\_token" param in the request. This param takes the value from the key "next\_page\_token" in the response of the first Get Related Records call. Note that this token value is user-specific. If you use another user's token, the system throws an error.

Note that you cannot use this param with the "page" param.

- idsstring, optional



To retrieve specific records based on their unique ID.

**Possible values:** Valid unique IDs of records. Example: 4150868000001944196

- sort\_orderstring



To sort the available list of records in either ascending or descending order.

**Possible values**: **asc** \- ascending order, **desc** \- descending order. The default value is 'desc'.

- sort\_bystring



To sort the records based on the fields **id**, **Created\_Time**, and **Modified\_Time**. The default value is 'id'. Note that you cannot use this param with the "cvid" param.

- convertedstring



To get the list of converted records. Default value is **false**.

**Possible values**: **true** \- get only converted records, **false** \- get only non-converted records, **both** \- get all records.


**Note**

- The **page** and **per\_page** parameter is used to fetch records according to their position in the CRM. Let's assume that the user has to fetch 400 records. The maximum number of records that one can get for an API call is 200. So, for records above the 200th position, they cannot be fetched. By using the page (1 and 2) and per\_page (200) parameter, the user can fetch all 400 records using 2 API calls.
- If the requested related list is not present or hidden in a layout, the system will return an INVALID\_DATA response.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/4876876000000376008/Notes?fields=Owner,Parent_Id"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/4876876000000376008/Notes?fields=Owner,Parent_Id"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON keys

- OwnerJSON object



Represents the name, ID, and email of the record owner.

- Modified\_Timestring



Represents the date and time at which related record was last modified.

- Created\_Timestring



Represents the date and time at which related record was created.

- $editableboolean



Represents if the user can edit the current related record.

**true:** The user can edit the current related record.

**false:** The user cannot edit the current related record.

- Modified\_ByJSON object



Represents the name, ID, and email of the user who last modified the related record.

- idstring



Represents the unique ID of the related record.

- Created\_ByJSON object



Represents the name, ID, and email of the user who created the related record.


**Note**

- The keys listed above are common for all the related records. Along with the above keys, related record-specific keys will also be retrieved in the response.
- The value for the fields with sensitive health data will be retrieved **only** when **Restrict Data access through API** option in the compliance settings is **disabled**. If the option is enabled, the value for the HIPAA compliance field will be **null**. Refer to [HIPAA compliance](https://www.zoho.com/crm/developer/docs/api/v7/hipaa-compliance.html) for more details

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia Boyle",\
                "id": "4876876000000327001",\
                "email": "patricia.boyle@zohocorp.com"\
            },\
            "Parent_Id": {\
                "name": "Brian Dylan",\
                "id": "4876876000000376008"\
            },\
            "id": "4876876000001017003"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 1,
        "page": 1,
        "previous_page_token": null,
        "page_token_expiry": null,
        "more_records": false
    }
}
```

#### Response JSON for Activities\_Chronological\_View related list

Activities\_Chronological\_View related list gives you the details of the open activities(calls, tasks, meetings) of the record in the chronological order. The **$module** key represents the API name of the module that the related record belongs to. Besides this key, the fields that you queried for will also be available in the response.

#### Sample Request to get Open Activities in Chronological Order

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/Leads/554023000003136003/Activities_Chronological_View?fields=Call_Start_Time"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Call_Start_Time": "2023-06-25T20:00:00-11:00",\
            "id": "554023000003136019",\
            "$module": "Calls"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 1,
        "page": 1,
        "previous_page_token": null,
        "more_records": false
    }
}
```

Show full

Show less

#### Response JSON for Activities\_Chronological\_View\_History related list

Activities\_Chronological\_View\_History related list gives you the details of the closed activities(calls, tasks, meetings) of the record in the chronological order. The **$module** key represents the API name of the module that the related record belongs to. Besides this key, the fields that you queried for will also be available in the response.

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.

- NOT\_SUPPORTED HTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read related records

**Resolution:** The user does not have permission to read related records data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read related records data

**Resolution:** The user does not have the permission to read related records data. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the mandatory parameters. Refer to the Parameters section above for more details.


#### Sample Request to get Closed Activities in Chronological Order

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000003136003/Activities_Chronological_View_History?fields=Status,Call_Start_Time,Owner,Status,Subject"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Status": "Completed",\
            "id": "554023000003140004",\
            "$module": "Tasks",\
            "Subject": "Folow up"\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 1,
        "page": 1,
        "previous_page_token": null,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)