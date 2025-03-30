
# People Enrichment Details

#### Purpose

To get the details of the enriched data of your org.

This API is available only in the IN, AU, CA, US, and SA DCs. Note that you must have installed the **Web Amigo** extension from Marketplace to use People Enrichment APIs.

#### Endpoints

[GET /\_\_zia\_people\_enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-ppl-config.html)

[GET /\_\_zia\_people\_enrichment/{job\_id}](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-ppl-config.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_zia\_people\_enrichment

**To get a specific enrichment:**

{api-domain}/crm/{version}/\_\_zia\_people\_enrichment/{{job\_id}}

job\_id is the ID received while you created [people enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-ppl-enrichment.html).

#### Header

Authorization: Zoho-oauthtoken <access-token>

#### Scope

ZohoCRM.settings.intelligence.ALL

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



To get the response based on the status of the scheduled job using the [create people enrichment](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/create-ppl-enrichment.html) API. The possible values are **COMPLETED**, **SCHEDULED**, **FAILED**, and **DATA\_NOT\_FOUND**.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__zia_people_enrichment"
-X GET
-H "Authorization: Zoho-oauthtoken <access-token>"
```

#### Response while fetching all people enrichments

When you fetch all people enrichments created, you will get the "id" of the job, "status", "created\_time", and "created\_by".

#### Sample Response while fetching all enrichments

``` json
Copied{
    "__zia_people_enrichment": [\
        {\
            "id": "111111000000066005",\
            "status": "SCHEDULED",\
            "created_time": "2024-07-27T07:12:13Z",\
            "created_by": {\
                "id": "111111000000050755",\
                "name": "Patricia Boyle"\
            }\
        }\
    ]
}
```

#### Response while fetching a specific people enrichment

When you fetch a specific people enrichment through it's ID, you will get the details of the fields that were enriched.

#### Possible Errors

- NO\_CONTENTHTTP 204



There is no data enrichment created for your org. Note that this error is applicable only when you fetch a specific enrichment.

**Resolution:** Create data enrichment for your org.

- INVALID\_DATAHTTP 400



Note that this error is applicable only when you fetch all enrichments.



- You have given an invalid value for the "sort\_by" parameter. Note that this error is applicable only when you fetch a specific enrichment.

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


#### Sample response for a specific people enrichment

``` json
Copied{
    "__zia_people_enrichment": [\
        {\
            "enriched_data": {\
                "website": "spacex.com",\
                "email_infos": [\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "e.musk@teslamotors.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elon.musk@spacex.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "emusk@spacex.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "emusk@solarcity.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elon@spacex.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "elon.musk@teslamotors.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "emusk@tesla.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "emusk@teslamotors.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "elon@teslamotors.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "elon@solarcity.com"\
                    },\
                    {\
                        "type": "PROFESSIONAL",\
                        "email": "elonmuskoffice@spacex.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elonmusk@gmail.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elonmusk@yahoo.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elonmuskoffice@teslamotors.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elon_musk@aztecgrill.com"\
                    },\
                    {\
                        "type": "PERSONAL",\
                        "email": "elon.musk@tesla.com"\
                    }\
                ],\
                "gender": null,\
                "company_info": {\
                    "industries": [\
                        "Automotive"\
                    ],\
                    "name": "Spacex",\
                    "experiences": [\
                        {\
                            "end_period": null,\
                            "company_name": "Tesla",\
                            "title": "Chief Executive Officer",\
                            "primary": false,\
                            "start_period": null\
                        },\
                        {\
                            "end_period": "2002",\
                            "company_name": "Paypal",\
                            "title": "Co Founder",\
                            "primary": false,\
                            "start_period": "1999"\
                        },\
                        {\
                            "end_period": "1999",\
                            "company_name": "Zip2 Corp. (Acquired by Compaq / Alta Vista)",\
                            "title": "Co Founder",\
                            "primary": false,\
                            "start_period": "1995"\
                        },\
                        {\
                            "end_period": null,\
                            "company_name": "Spacex",\
                            "title": "Chief Executive Officer and Chief Technology Officer",\
                            "primary": true,\
                            "start_period": "2002"\
                        },\
                        {\
                            "end_period": null,\
                            "company_name": "Solarcity",\
                            "title": "Chairman and Co Founder",\
                            "primary": false,\
                            "start_period": "2006"\
                        }\
                    ]\
                },\
                "last_name": "Musk",\
                "educations": [\
                    {\
                        "majors": null,\
                        "school_name": "Wharton School",\
                        "degrees": null\
                    },\
                    {\
                        "majors": [\
                            "Economics"\
                        ],\
                        "school_name": "The Wharton School",\
                        "degrees": [\
                            "Bachelors",\
                            "Bachelor of Arts"\
                        ]\
                    },\
                    {\
                        "majors": [\
                            "Physics",\
                            "Philosophy"\
                        ],\
                        "school_name": "Stanford University",\
                        "degrees": [\
                            "Doctorates",\
                            "Doctor of Philosophy"\
                        ]\
                    },\
                    {\
                        "majors": [\
                            "Physics"\
                        ],\
                        "school_name": "University of Pennsylvania",\
                        "degrees": [\
                            "Bachelors",\
                            "Bachelor of Science"\
                        ]\
                    }\
                ],\
                "skills": null,\
                "primary_address_info": {\
                    "continent": "North America",\
                    "country": "United States",\
                    "name": "El Segundo, California, United States",\
                    "region": "California",\
                    "primary": true\
                },\
                "name": "Elon Musk",\
                "primary_email": "e.musk@teslamotors.com",\
                "id": "0Z3xGk0Aip0yvSi+sIQjxQ==",\
                "designation": "Chief Executive Officer",\
                "first_name": "Elon",\
                "primary_contact": "+1 310-414-6555",\
                "social_media": [\
                    {\
                        "media_type": "facebook.com",\
                        "media_url": [\
                            "facebook.com/elon.musk.7"\
                        ]\
                    },\
                    {\
                        "media_type": "crunchbase.com",\
                        "media_url": [\
                            "crunchbase.com/person/elon-musk"\
                        ]\
                    },\
                    {\
                        "media_type": "flickr.com",\
                        "media_url": [\
                            "flickr.com/people/elonmusk"\
                        ]\
                    },\
                    {\
                        "media_type": "instagram.com",\
                        "media_url": [\
                            "instagram.com/elonmusk"\
                        ]\
                    },\
                    {\
                        "media_type": "klout.com",\
                        "media_url": [\
                            "klout.com/elonmusk"\
                        ]\
                    },\
                    {\
                        "media_type": "about.me",\
                        "media_url": [\
                            "about.me/elonmusk"\
                        ]\
                    },\
                    {\
                        "media_type": "linkedin.com",\
                        "media_url": [\
                            "linkedin.com/in/emusk"\
                        ]\
                    },\
                    {\
                        "media_type": "twitter.com",\
                        "media_url": [\
                            "twitter.com/elonmusk"\
                        ]\
                    }\
                ]\
            },\
            "enrich_based_on": {\
                "social": {\
                    "twitter": "twitter.com/elonmusk",\
                    "facebook": "facebook.com/elonmusk",\
                    "linkedin": "linkedin.com/elonmusk"\
                },\
                "name": "elon musk",\
                "company": {\
                    "website": "www.spacex.com",\
                    "name": "spacex"\
                },\
                "email": "elonmusk@gmail.com"\
            },\
            "id": "1941874000003442382",\
            "status": "COMPLETED"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/zia-enrichment/get-ppl-config.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)