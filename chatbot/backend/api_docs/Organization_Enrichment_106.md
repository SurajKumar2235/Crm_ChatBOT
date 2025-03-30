
# Organization Enrichment

#### Purpose

Zia enriches data in Zoho CRM based on the data available on the Internet. When you have enabled data enrichment, certain fields act as triggers and enrich data in other fields based on the mapping you have given. For example, if you have set the organization name as one of the trigger fields, then when you enter data to this field while record creation or update, the other fields are enriched based on this.

Use this API to initialize or trigger data enrichment on the org level. This API schedules a job.

#### Endpoints

[POST /\_\_zia\_org\_enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-org-enrichment.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_zia\_org\_enrichment

#### Header

Authorization: Zoho-oauthtoken<access-token>

#### Scope

scope=ZohoCRM.settings.intelligence.ALL

(or)

scope=ZohoCRM.settings.intelligence.CREATE

##### Parameters

- modulemandatory



The API name of the module you want to trigger or initialize enrichment. Use the [Get Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules.html) to get the API name of the module.

- record\_idoptional



The ID of the record you want to trigger enrichment for. Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the IDs of the records in a module.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__zia_org_enrichment?module=Accounts"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Request JSON

- enrich\_based\_onJSON object



The details of the fields on whose values you want to trigger enrichment. Note that you must **provide at least one of the following values in the input**. Based on these values, Zia will look for information on the web and enrich fields as per [Enrichment Configuration](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html). Note that the values of these keys must be at least three characters long and only in English.



  - namestring



    The name of the organization.

  - emailstring



    The email address of the organization.

  - websitestring



    The website of the organization.

#### Sample Input

``` json
Copied{
    "__zia_org_enrichment": [\
        {\
            "enrich_based_on": {\
                "name": "zoho",\
                "email": "sales@zohocorp.com",\
                "website": "www.zoho.com"\
            }\
        }\
    ]
}
```

#### Response JSON

- codestring



The code that represents the status of the API. "SCHEDULED" means a job is scheduled.

- detailsJSON object



The unique ID of the scheduled job. Use this ID in the [Get Org Configuration API](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-org-config.html) to get the details of the enrichment.

- statusboolean



The status of the enrichment.


#### Possible Errors

- INVALID\_DATAHTTP 400



- The API name of the "name", "email" or "website" keys is incorrect.

**Resolution:** Input correct key names.
- The API name of the module is incorrect.

**Resolution:** Input correct module API name. Use the [Get Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules.html) to get the API name of the module.
- The record ID is invalid.

**Resolution:** Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the ID of the record in the module.
- The length of the values of the keys "email", "name" and "website" are less than three characters long.

**Resolution:** The values of these keys must be at least three characters long.
- You have specified the values of either "email", "name" or "website" key in other language.

**Resolution:** The values of these keys must be only in English.
- The data type of the keys in the input is not string.

**Resolution:** The values of the input keys must be string.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified the key "enrich\_based\_on" in the input.

**Resolution:** "enrich\_based\_on" is a mandatory input key.

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified any key in the "enrich\_based\_on" JSON object.

**Resolution:** Specify at least one of "name", "email", or "website" in the "enrich\_based\_on" JSON object.

- LIMIT\_EXCEEDEDHTTP 400



You have created more than the allowed enrichments for your org.

**Resolution:** The enrichment limit depends on the number of users. For the Enterprise edition, the limit is **No. of users x 500** and for Ultimate, it is **No. of users x 2000**, while the maximum limit is 50,000 for both editions. For more details, refer to the [Edition-wise feature list of Zoho CRM](https://www.zoho.com/crm/help/complete-feature-list.html).

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the "module" parameter in the request.

**Resolution:** "module" is the mandatory parameter in the request.

- NOT\_ALLOWEDHTTP 400



"email" is not mapped in configuration.

**Resolution:** you can enrich fields only based on the fields in [Enrichment Configuration](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html).

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



You do not have permission to access this feature.

**Resolution:** Contact your system administrator.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "__zia_org_enrichment": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "id": "111112000000071191"\
            },\
            "message": "Org Enrichment scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-org-enrichment.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)