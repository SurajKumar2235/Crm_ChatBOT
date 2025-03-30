
# People Enrichment

#### Purpose

Zia enriches data in Zoho CRM based on the data available on the Internet. When you have enabled data enrichment, certain fields act as triggers and enrich data in other fields based on the mapping you have given. For example, if you have set the organization name as one of the trigger fields, then when you enter data to this field while record creation or update, the other fields are enriched based on this.

Personal information enrichment focuses on details related to individuals, such as their job titles, contact details, social media profiles, and professional background. This type of data helps in personalizing outreach and building stronger relationships with contacts.

Use this API to initialize or trigger data enrichment at the people(personal) level. This API schedules a job. Note that an enrichment configuration must be present for the module you want to trigger the enrichment for using this API.

This API is available only in the IN , AU , CA , US , and SA DCs. Note that you must have installed the **Web Amigo** extension from Marketplace to use People Enrichment APIs.

#### Endpoints

[POST /\_\_zia\_people\_enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-ppl-enrichment.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_zia\_people\_enrichment

#### Header

Authorization: Zoho-oauthtoken <access-token>

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
Copiedcurl "https://www.zohoapis.com/crm/v7/__zia_people_enrichment?module=Leads"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Request JSON

- enrich\_based\_on, JSON object



The details of the fields on whose values you want to trigger enrichment. Note that you must provide at least one of the following values in the input. Based on these values, Zia will look for information on the web and enrich fields as per [Enrichment Configuration](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html). Note that the values of these keys must be at least three characters long and only in English.



  - namestring



    The name of the person. If you include this key, you must also include either "company" or "website" key.

  - emailstring



    The email address of the person.

  - companystring



    The company's name that the person works at or worked at.

  - socialJSON object



    The Facebook, LinkedIn, and Twitter handles of the person.

#### Sample Input

``` json
Copied{
    "__zia_people_enrichment": [\
        {\
            "enrich_based_on": {\
                "name": "Test",\
                "email": "sales@zohocorp.com",\
                "company": {\
                    "name": "zoho",\
                    "website": "www.zoho.com"\
                },\
                "social": {\
                    "facebook": "facebook.com/zoho",\
                    "linkedin": "linkedin.com/zoho",\
                    "twitter": "twitter.com/zoho"\
                }\
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



- The API name of the one or more keys in the input is incorrect.

**Resolution:** Refer to the "details" key for the incorrect keys and specify valid values for the same.
- The API name of the module is incorrect.

**Resolution:** Input correct module API name. Use the [Get Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules.html) to get the API name of the module.
- The record ID is invalid.

**Resolution:** Use the [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the ID of the record in the module.
- The length of the values of the keys is less than three characters.

**Resolution:** The values of these keys must be at least three characters long.
- You have specified the values in other language.

**Resolution:** The values of the keys must be only in English.
- The data type of the keys in the input is not string.

**Resolution:** The values of the input keys must be string.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified the key "enrich\_based\_on" in the input.

**Resolution:** "enrich\_based\_on" is a mandatory input key.

- EXPECTED\_FIELD\_MISSINGHTTP 400



You have not specified any key in the "enrich\_based\_on" JSON object.

**Resolution:** Specify at least one of "name", "email", "social", or "company" in the "enrich\_based\_on" JSON object.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



"company" and "name" are dependent fields. You have specified only one of these keys in the input.

**Resolution:** Specify both "company" and "name" fields in the input.

- LIMIT\_EXCEEDEDHTTP 400



You have created more than 1500 people enrichments for your org.

**Resolution:** You can create a maximum of 1500 enrichments for your org, i.e, you can make a maximum of 15000 POST calls of this API with different field combinations in the input.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the "module" parameter in the request.

**Resolution:** "module" is the mandatory parameter in the request.

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
    "__zia_people_enrichment": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "id": "1941874000003019012"\
            },\
            "message": "People Enrichment scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-ppl-enrichment.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)