
# Get Pipelines in a Layout

#### Purpose

To fetch the details of all or a specific pipeline in the **Deals** module.

### Request Details

#### Request URL

**All** \- {api-domain}/crm/{version}/settings/pipeline?layout\_id={layout\_id}

**Specific** \- {api-domain}/crm/{version}/settings/pipeline/{pipeline\_ID}?layout\_id={layout\_id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.pipeline.READ

#### Endpoints

[GET /settings/pipeline?layout\_id={layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html)

[GET /settings/pipeline/{pipeline\_ID}?layout\_id={layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html)

##### Parameters

- layout\_idstring, mandatory



The unique ID of the layout in the Deals module you want to fetch the pipeline's details from. Note that this parameter is mandatory for fetching all pipelines and a specific pipeline. The system throws an error, otherwise.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/pipeline?layout_id=3652397000000091023"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



The layout ID is invalid.

**Resolution:** Specify the correct layout ID. Use the [Layouts Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to get the ID of the layout.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not included the mandatory parameter "layout\_id" in your request.

**Resolution:** "layout\_id" is a mandatory parameter while fetching all or a specific pipeline from the Deals module.

- NO\_CONTENTHTTP 204



You have either passed an incorrect value for the pipeline ID in the request, or you have not created a pipeline in that layout.

**Resolution:** Specify the correct pipeline ID in the request.


#### Sample Response

``` json
Copied{
    "pipeline": [\
        {\
            "display_value": "Standard (Standard)",\
            "default": true,\
            "maps": [\
                {\
                    "display_value": "Qualification",\
                    "sequence_number": 1,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Qualification",\
                    "id": "3652397000000006801",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Needs Analysis",\
                    "sequence_number": 2,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Needs Analysis",\
                    "id": "3652397000000006803",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Value Proposition",\
                    "sequence_number": 3,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Value Proposition",\
                    "id": "3652397000000006805",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Identify Decision Makers",\
                    "sequence_number": 4,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Id. Decision Makers",\
                    "id": "3652397000000006807",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Proposal/Price Quote",\
                    "sequence_number": 5,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Proposal/Price Quote",\
                    "id": "3652397000000006811",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Negotiation/Review",\
                    "sequence_number": 6,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Negotiation/Review",\
                    "id": "3652397000000006813",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Closed Won",\
                    "sequence_number": 7,\
                    "forecast_category": {\
                        "name": "Closed",\
                        "id": "3652397000000006789"\
                    },\
                    "actual_value": "Closed Won",\
                    "id": "3652397000000006815",\
                    "forecast_type": "Closed Won"\
                },\
                {\
                    "display_value": "Closed Lost",\
                    "sequence_number": 8,\
                    "forecast_category": {\
                        "name": "Omitted",\
                        "id": "3652397000000006791"\
                    },\
                    "actual_value": "Closed Lost",\
                    "id": "3652397000000006817",\
                    "forecast_type": "Closed Lost"\
                },\
                {\
                    "display_value": "Closed-Lost to Competition",\
                    "sequence_number": 9,\
                    "forecast_category": {\
                        "name": "Omitted",\
                        "id": "3652397000000006791"\
                    },\
                    "actual_value": "Closed Lost to Competition",\
                    "id": "3652397000000006819",\
                    "forecast_type": "Closed Lost"\
                }\
            ],\
            "actual_value": "Standard (Standard)",\
            "id": "3652397000003097001"\
        },\
        {\
            "display_value": "Pipeline1",\
            "default": false,\
            "maps": [\
                {\
                    "display_value": "Qualification",\
                    "sequence_number": 1,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Qualification",\
                    "id": "3652397000000006801",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Needs Analysis",\
                    "sequence_number": 2,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Needs Analysis",\
                    "id": "3652397000000006803",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Value Proposition",\
                    "sequence_number": 3,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Value Proposition",\
                    "id": "3652397000000006805",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Proposal/Price Quote",\
                    "sequence_number": 4,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Proposal/Price Quote",\
                    "id": "3652397000000006811",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Negotiation/Review",\
                    "sequence_number": 5,\
                    "forecast_category": {\
                        "name": "Pipeline",\
                        "id": "3652397000000006787"\
                    },\
                    "actual_value": "Negotiation/Review",\
                    "id": "3652397000000006813",\
                    "forecast_type": "Open"\
                },\
                {\
                    "display_value": "Closed Won",\
                    "sequence_number": 6,\
                    "forecast_category": {\
                        "name": "Closed",\
                        "id": "3652397000000006789"\
                    },\
                    "actual_value": "Closed Won",\
                    "id": "3652397000000006815",\
                    "forecast_type": "Closed Won"\
                },\
                {\
                    "display_value": "Closed Lost",\
                    "sequence_number": 7,\
                    "forecast_category": {\
                        "name": "Omitted",\
                        "id": "3652397000000006791"\
                    },\
                    "actual_value": "Closed Lost",\
                    "id": "3652397000000006817",\
                    "forecast_type": "Closed Lost"\
                },\
                {\
                    "display_value": "Closed-Lost to Competition",\
                    "sequence_number": 8,\
                    "forecast_category": {\
                        "name": "Omitted",\
                        "id": "3652397000000006791"\
                    },\
                    "actual_value": "Closed Lost to Competition",\
                    "id": "3652397000000006819",\
                    "forecast_type": "Closed Lost"\
                }\
            ],\
            "actual_value": "Pipeline1",\
            "id": "3652397000003097007"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)