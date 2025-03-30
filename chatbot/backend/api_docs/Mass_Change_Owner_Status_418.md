
# Mass Change Owner Status

#### Purpose

To get the status of the mass change owner job scheduled previously.

#### Endpoints

[GET /{module\_api\_name}/actions/mass\_chnage\_owner?job\_id={job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/mass\_change\_owner?job\_id={job\_id}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.change\_owner.READ

#### Parameters

- job\_idstring, mandatory



Specifies the unique ID of the mass change owner job scheduled previously using [Mass Change Owner](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner.html) API.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/mass_change_owner?job_id=3652397000009565021"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- Total\_Countinteger



Specifies the total number of records whose owners you wanted to change.

- Updated\_Countinteger



Specifies the number of records whose owners were successfully changed.

- Not\_Updated\_Countinteger



Specifies the number of records whose owners are not changed, yet.

- Failed\_Countinteger



Specifies the number of records whose owners were not changed.

- Statusstring



Indicates the status of the mass change owner API. Possible values are "COMPLETED", "SCHEDULED", "RUNNING", and "FAILED".


#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 404



You have not specified the job\_id in the request.

**Resolution:** The specified job\_id is not found or invalid. Specify a valid job\_id

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** You do not have ZohoCRM.change\_owner.CREATE scope. Create new tokens with valid scope. Refer to the scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read records

**Resolution:** The user does not have permission to retrieve mass change owner.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Total_Count": 50000,\
            "Updated_Count": 49500,\
            "Not_Updated_Count": 0,\
            "Failed_Count": 500,\
            "Status": "COMPLETED"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/mass-change-owner-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)