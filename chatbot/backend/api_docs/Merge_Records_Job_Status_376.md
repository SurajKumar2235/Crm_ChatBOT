
# Get Records Merge Status

##### Purpose

To get the status of previously scheduled [records merge](https://www.zoho.com/crm/developer/docs/api/v7/merge-records.html) job.

#### Endpoints

[GET /{module\_api\_name}/{master\_record\_id}/actions/merge](https://www.zoho.com/crm/developer/docs/api/v7/get-merge-status.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/{master\_record\_id}/actions/merge

#### Supported Modules

Leads, Contacts, Accounts, Deals, Vendors and Custom.

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

#### Possible Module Names

leads, contacts, deals, accounts, vendors and custom.

#### Possible Operation Types

READ - Get records in a module.

ALL - Full access to the record.

#### Parameter

- job\_idstring, optional



The ID represents the unique identifier of your scheduled merge job, which you get from the response of the [Merge Records API](https://www.zoho.com/crm/developer/docs/api/v7/create-merge.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/2378988000000509963/actions/merge"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- job\_idstring



Specifies the unique ID of the scheduled merge job.

- statusstring



Specifies the current status of the scheduled call.

Possible values: RUNNING, SCHEDULED, COMPLETED, and FAILURE.


#### Sample Response

``` json
Copied{
    "merge": [\
        {\
            "job_id": "2423488000000513988",\
            "status": "COMPLETED"\
        }\
    ]
}
```

#### Possible Errors

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- INVALID\_DATAHTTP 400



Specified master record ID is invalid

**Resolution:** Please specify the valid master record ID.

- INVALID\_MODULEHTTP 400



The module name given seems to be invalid

**Resolution:** You have specified an invalid module name.

Specify a valid module name.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have **ZohoCRM.module.{module\_api\_name}.READ** scope.

Create a new token with required scopes. Refer to scope section above.

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

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-merge-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)