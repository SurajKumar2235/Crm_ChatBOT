
# Get Related Records of a Deleted Record

This API retrieves related records associated with a deleted record created through lookup relationships. You can use this API when the parent record is not permanently deleted, i.e., it is still in the Recycle Bin.

#### Purpose

To get the related list records of a deleted record.

#### Endpoints

[GET /{module\_api\_name}/deleted/{deleted\_record\_id}/{related\_list\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records-of-deleted-record.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/deleted/{deleted\_record\_id}/{related\_list\_api\_name}

#### Supported relations

The lookup fields and their relations are supported.

The **href** attribute in the response of the [Related List Meta data API](https://www.zoho.com/crm/developer/docs/api/v7/related-list-meta.html) gives you the endpoints to fetch the related list records of a module. Please note that from this, only lookup field relationships are supported for this API.

#### Scope

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_api\_name}.{operation\_type}

#### Possible module names

leads, accounts, contacts, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices,appointments, appointments\_rescheduled\_history, services, and custom.

#### Possible operation types

READ - Read related records

ALL - Full access to related records

#### Parameters

- fieldsstring, mandatory



Specify the API name of the field whose details you want to retrieve.

- pageinteger, optional



To get the list of records from the respective pages. Default value for page is **1**.

**Possible values:** Positive Integer values only.

- per\_pageinteger, optional



The number of results to fetch and display records. The default and the maximum possible value is **200**.

**Possible values:** Positive Integer values only.


**Notes**

- The **page** and **per\_page** parameter is used to fetch records according to their position in the CRM. Let's assume that the user has to fetch 400 records. The maximum number of records that one can get for an API call is 200. So, for records above the 200th position, they cannot be fetched. By using the page (1 and 2) and per\_page (200) parameter, the user can fetch all 400 records using 2 API calls.
- You can retrieve records only from associated modules that are not in the recycle bin, but the parent record must not be permanently deleted.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/deleted/2423488000000552938/Campaigns?fields=Owner,Parent_Id"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/Leads/deleted/2423488000000552938/Products?fields=Owner,Parent_Id"\
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



Represents if the user can edit the specific related record or not.

**true:** The user can edit the current related record.

**false:** The user cannot edit the current related record.

- Modified\_ByJSON object



Represents the name, ID, and email of the user who last modified the related record.

- idstring



Represents the unique ID of the related record.

- Created\_ByJSON object



Represents the name, ID, and email of the user who created the related record.


**Notes**

- The keys listed above are common for all the related records. Along with the above keys, fields specific to the related record will also be retrieved.
- You can fetch records from the **lookup** fields, but not from **multiselect lookup** fields.

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": {\
                "name": "Patricia",\
                "id": "2423488000000483001",\
                "email": "patricia@zoho.com"\
            },\
            "$member_info": {\
                "Modified_Time": "2023-10-31T18:10:23+05:30",\
                "Created_Time": "2023-10-31T18:10:23+05:30",\
                "id": "2423488000000558116"\
            },\
            "id": "2423488000000552158"\
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

#### Possible Errors

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** Specify a valid module API name.

- INVALID\_DATAHTTP 400



- The relation name given seems to be invalid
- Given ID of the record seems to be invalid

**Resolutions:**

- You have specified an invalid module name (Like Notes, Attachments,...) or there is no tab permission, or the module could have been removed from the available modules. Specify a valid module API name.
- Specify a valid record ID.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read related records data

**Resolution:** The user does not have the permission to read related records data. Contact your system administrator.

- NOT\_SUPPORTED HTTP 400



The given module is not supported in API

**Resolution:** The modules such as Documents and Projects are not supported in the current API. (This error will not be shown, once these modules are been supported). Specify a valid module API name.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One of the expected parameter is missing

**Resolution:** Specify the mandatory parameters. Refer to the Parameters section above for more details.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.modules.{module\_name}.READ scope. Create a new token with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read related records

**Resolution:** The user does not have permission to read related records data. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.


© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-related-records-of-deleted-record.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)