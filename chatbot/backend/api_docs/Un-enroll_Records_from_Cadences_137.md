
# Un-enroll Records from Cadences

#### Purpose

To manually un-enroll the records of a module from a Cadence.

#### Endpoints

[POST /{{module\_api\_name}}/actions/unenrol\_from\_cadences](https://www.zoho.com/crm/developer/docs/api/v7/cadences/unenroll.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{{module\_api\_name}}/actions/unenrol\_from\_cadences

#### Supported Modules

Leads, Contacts, Deals, Vendors, and Custom(for Enterprise and above editions)

#### Header

Authorization: Zoho-oauthtoken <access-token>

#### Scope

scope=ZohoCRM.modules.CREATE

(or)

scope=ZohoCRM.modules.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.CREATE

(or)

scope=ZohoCRM.modules.{module\_name}.ALL

#### Possible module names

leads, contacts, deals, vendors, {custom\_module\_name}

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Contacts/actions/unenrol_from_cadences "
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Request JSON

- cadences\_idsJSON array



The unique IDs of the cadences in your org that you want to un-enroll records from. Use the [Get Cadences API](https://www.zoho.com/crm/developer/docs/api/v7/cadences/get-cadences.html) to get the unique IDs. You can specify up to **5 cadence IDs** in this array.

- idsJSON array



The unique IDs of the records that you want to un-enroll from cadences. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the unique IDs of the records of a module. You can specify up to **100 record IDs** in this array.


#### Sample Input

``` json
Copied{
    "cadences_ids": [\
        "554023000004092008"\
    ],
    "ids": [\
        "554023000001798647"\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified "ids" in the input.

**Resolution:** "ids" is a mandatory input key.

- INVALID\_DATAHTTP 400



You have not specified invalid record ID(s) or cadence ID(s) in the input. The "details" key gives the API name and JSON path of the invalid input.

**Resolution:** Specify correct record IDs and cadence IDs. Refer to the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) and [Get Cadences API](https://www.zoho.com/crm/developer/docs/api/v7/cadences/get-cadences.html) to get the record IDs and Cadence IDs, respectively.

- NOT\_ALLOWEDHTTP 400



The cadence ID you specified is not of the type "Manual Enrollment".

**Resolution:** You can manually un-enroll records only in a cadence of the type "Manual Enrollment".

- LIMIT\_EXCEEDEDHTTP 400



You have either given more than 5 cadence IDs or more than 100 record IDs or both in their respective arrays. Refer to the "limit\_due\_to" key for details.

**Resolution:** You can un-enroll a maximum of 100 records per API call in a maximum of 5 cadences.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the "Scopes" section and try this API.

- NO\_PERMISSIONHTTP 403



You do not have permission to access this feature.

**Resolution:** Contact your system administrator.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "cadences": [\
                    {\
                        "name": "CadenceTest1",\
                        "id": "554023000004092008"\
                    }\
                ],\
                "id": "554023000001798647"\
            },\
            "message": "records manually unenrolled",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/cadences/unenroll.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)