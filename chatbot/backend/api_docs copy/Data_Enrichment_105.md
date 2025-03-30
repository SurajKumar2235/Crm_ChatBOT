
# Enrichment Configuration

## Data Enrichment

Zia, Zoho CRM's AI-powered assistant, can help you ensure that your CRM data is complete and updated. Based on information as little as website, name of a company etc., Zia crawls web pages and retrieves additional information such as the company's address, phone, number of employees, the social media handles of the CEO and other public information. This is called Data Enrichment. Refer to [this article](https://help.zoho.com/portal/en/kb/crm/zia-artificial-intelligence/data-enrichment-1/articles/zia-data-enrichment#Supported_Modules) for more details.

When you enable Data Enrichment, you can map the data available over the Internet with the fields in Zoho CRM. Data mapping happens by default for system-defined fields, but you can also map with custom fields. This mapping is called configuration.

#### Purpose

Use this API to get the details of configuration for data enrichment. This API gives you the mapping of the enrich fields with their corresponding CRM fields for enriching data.

#### Endpoints

[GET /settings/zia/data\_enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/zia/data\_enrichment

#### Supported Modules

Leads, Contacts, Accounts, Vendors, and Custom

#### Header

Authorization: Zoho-oauthtoken<access-token>

#### Scope

scope=ZohoCRM.Zia.enrichment.ALL

(or)

scope=ZohoCRM.Zia.enrichment.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/zia/data_enrichment"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- idstring



Unique ID of the enrichment configuration.

- typestring



The type of enrichment. Possible values are **organization** for organization enrichment and **personal** for people enrichment.

- moduleJSON object



The ID and API name of the module for which this configuration was created.

- statusboolean



The status of the configuration. **true** indicates that the configuration is active and **false** indicates that the configuration is disabled.

- input\_data\_field\_mappingJSON array



The mapping of enrich fields with fields in Zoho CRM. These enrich fields are the triggers based on which data is enriched in other fields. For example, if you have configured "Company" as the enrich field in the Leads module, then, while creating or updating a lead, if you input a value to the Company field, data in other fields will be automatically populated with enriched data based on the mapping.



  - enrich\_fieldJSON object



    The name and display label of the enrich field. Zia will look for data about this field over the Internet.

  - crm\_fieldJSON object



    The unique ID, name, and API name of the field in CRM. Input to this field triggers data enrichment in fields specified in **output\_data\_field\_mapping**.
- output\_data\_field\_mappingJSON array



The mapping of enrich fields with fields in Zoho CRM. These fields in CRM will be enriched based on data available over the Internet whenever values are input for the fields specified in "input\_data\_field\_mapping".



  - enrich\_fieldJSON object



    The name and display label of the enrich field. Zia will look for data about this field over the Internet and enriches data in the mapped field.

  - crm\_fieldJSON object



    The unique ID, name, and API name of the field in CRM. When enrichment is enabled and Zia finds data, the relevant fields in CRM will get updated.
- modified\_timestring



The date and time in the ISO8601 format at which the enrichment details were last modified.

- modified\_byJSON object



The unique ID and name of the user that modified the enrichment details.


#### Possible Errors

- NO\_CONTENTHTTP 204



There is no data enrichment configured for your org.

**Resolution:** Configure data enrichment for your org.

- FEATURE\_NOT\_ENABLEDHTTP 400



Data enrichment feature is not enabled for your account.

**Resolution:** Enable data enrichment feature or contact your system administrator.

- FEATURE\_NOT\_SUPPORTEDHTTP 400



Data enrichment is not available for your edition of CRM.

**Resolution:** Data enrichment is available only for the Enterprise and Ultimate editions of CRM. Upgrade your edition or contact support@zohocrm.com.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the "Scopes" section and try this API.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "data_enrichment": [\
        {\
            "id": "111112000000059747",\
            "type": "organization",\
            "module": {\
                "id": "111112000000002405",\
                "api_name": "Leads"\
            },\
            "status": true,\
            "input_data_field_mapping": [\
                {\
                    "enrich_field": {\
                        "name": "org_name",\
                        "display_label": "Organization Name"\
                    },\
                    "crm_field": {\
                        "id": "111112000000004381",\
                        "api_name": "Company",\
                        "name": "Company"\
                    }\
                },\
                {\
                    "enrich_field": {\
                        "name": "email",\
                        "display_label": "Email"\
                    },\
                    "crm_field": {\
                        "id": "111112000000004391",\
                        "api_name": "Email",\
                        "name": "Email"\
                    }\
                },\
                {\
                    "enrich_field": {\
                        "name": "org_website",\
                        "display_label": "Website"\
                    },\
                    "crm_field": {\
                        "id": "111112000000004399",\
                        "api_name": "Website",\
                        "name": "Website"\
                    }\
                }\
            ],\
            "created_time": "2024-05-13T19:35:23+09:00",\
            "created_by": {\
                "id": "111112000000055001",\
                "name": "Patricia Boyle"\
            },\
            "modified_time": "2024-05-13T19:35:23+09:00",\
            "modified_by": {\
                "id": "111112000000055001",\
                "name": "Patricia Boyle"\
            }\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-config.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)