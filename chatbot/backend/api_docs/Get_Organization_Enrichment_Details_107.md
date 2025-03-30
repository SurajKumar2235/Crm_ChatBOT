
# Get Organization Enrichment Details

#### Purpose

To get the details of the enriched data of your org.

#### Endpoints

[GET /\_\_zia\_org\_enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-org-config.html)

[GET /\_\_zia\_org\_enrichment/{job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-org-config.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_zia\_org\_enrichment

**To get a specific enrichment:**

{api-domain}/crm/{version}/\_\_zia\_org\_enrichment/{{job\_id}}

job\_id is the ID received while you created [org enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-org-enrichment.html).

#### Header

Authorization: Zoho-oauthtoken <access-token>

#### Scope

ZohoCRM.settings.intelligence.ALL/READ

(or)

ZohoCRM.settings.intelligence.READ

#### Parameters

- pageoptional



To get the list of records from the respective pages. The default value is 1. Accepts positive integer values only.

- per\_pageoptional



To get the list of records available per page. The default and the maximum possible value is 100. Accepts positive integer values only.

- sort\_byoptional



To sort the response based on **created time**. The accepted value is **created\_time**.

- sort\_orderoptional



To sort the response either in ascending or descending order. The possible values are **asc** or **desc**.

- statusoptional



To get the response based on the status of the scheduled job using the [create org enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-org-enrichment.html) API. The possible values are **COMPLETED**, **SCHEDULED**, **FAILED**, and **DATA\_NOT\_FOUND**.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__zia_org_enrichment"
-X GET
-H "Authorization: Zoho-oauthtoken <access-token>"
```

#### Response while fetching all org enrichments

When you fetch all org enrichments created, you will get the "id" of the job, "status", "created\_time", and "created\_by".

#### Sample Response while fetching all enrichments

``` json
Copied{
    "__zia_org_enrichment": [\
        {\
            "id": "111112000000071191",\
            "status": "COMPLETED",\
            "created_time": "2024-05-12T23:51:22Z",\
            "created_by": {\
                "id": "111112000000055001",\
                "name": "Patricia Boyle"\
            }\
        },\
        {\
            "id": "111112000000071157",\
            "status": "SCHEDULED",\
            "created_time": "2024-05-12T23:55:02Z",\
            "created_by": {\
                "id": "111112000000055001",\
                "name": "Patricia Boyle"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

#### Response while fetching a specific org enrichment

When you fetch a specific org enrichment through it's ID, you will get the details of the fields that were enriched.

#### Possible Errors

- NO\_CONTENTHTTP 204



There is no data enrichment created for your org.

**Resolution:** Create data enrichment for your org.

- INVALID\_DATAHTTP 400



- You have given an invalid value for the "sort\_by" parameter.

**Resolution:** You can only sort by the created time.
- The value for the "status" parameter is incorrect.

**Resolution:** The possible values are **COMPLETED**, **SCHEDULED**, **FAILED**, and **DATA\_NOT\_FOUND**.
- The value for the "sort\_order" parameter is invalid.

**Resolution:** The possible values for this parameter are **asc** and **desc**.

- FEATURE\_NOT\_ENABLEDHTTP 400



Data enrichment feature is not enabled for your account.

**Resolution:** Enable data enrichment feature or contact your system administrator.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Data enrichment is not available for your edition of CRM.

**Resolution:** Data enrichment is available only for the Enterprise and Ultimate editions of CRM. Upgrade your edition or contact support@zohocrm.com.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the "Scopes" section and try this API.

- NO\_PERMISSIONHTTP 403



You do not have the **Manage or View Data Enrichment** permission to access this feature.

**Resolution:** Contact your system administrator.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample response for a specific org enrichment

``` json
Copied{
    "__zia_org_enrichment": [\
        {\
            "enrich_based_on": {\
                "name": "ABC",\
                "website": "www.zoho.com"\
            },\
            "enriched_data": {\
                "address": [\
                    {\
                        "city": "Chengalpattu District",\
                        "country": "India",\
                        "fill_address": "Estancia IT Park, Plot no. 140, 151, GST Road, Vallancheri",\
                        "pin_code": "603202",\
                        "state": "Tamil Nadu"\
                    }\
                ],\
                "id": "jRsJ7grCwzJfs4B384k4zY3OFsLIE+EGt9AwDDtb4j4=",\
                "industries": [\
                    {\
                        "description": "Includes information and data processing services, computer programming, systems design, consultancy, hosting and other computer related services.",\
                        "name": "Computer Programming Services"\
                    }\
                ],\
                "name": "ZOHO",\
                "primary_contact": "844-316-5544",\
                "primary_email": "sales@zohocorp.com",\
                "secondary_email": "press@zohocorp.com",\
                "social_media": [\
                    {\
                        "media_type": "TWITTER",\
                        "media_url": [\
                            "twitter.com/zoho"\
                        ]\
                    }\
                ],\
                "website": "https://www.zoho.com"\
            },\
            "id": "554023000004092135",\
            "status": "COMPLETED"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-org-config.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)