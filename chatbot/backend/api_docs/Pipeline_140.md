
# Update a Pipeline

#### Purpose

To update a pipeline in a layout.

#### Endpoints

[PUT /settings/pipeline/{pipeline\_ID}?layout\_id={layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/update-pipeline.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/pipeline/{pipeline\_ID}?layout\_id={layout\_id}

You can also send the pipeline ID in the input body.

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.pipeline.UPDATE

##### Parameters

- layout\_idstring, mandatory



The unique ID of the layout the pipeline is created in.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/pipeline/3652397000003097007?layout_id=3652397000000091023"
-X PUT
-d input.json
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

##### Request JSON

- display\_valueString, mandatory



The name of the pipeline you want to update. This key accepts an alphanumeric value.

- mapsJSON array, mandatory



The different stages that a deal has to pass through in the sales pipeline. This array contains the following keys:



- **sequence\_number** \- _integer, mandatory_ \- The order in which the stage must be displayed. If the value of this key is "1", then this stage will be displayed first.
- **id** \- _string, mandatory_ \- The unique ID of the stage. Use the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to obtain the unique ID of the field.

#### Sample Input

``` json
Copied{
    "pipeline": [\
        {\
            "display_value": "Pipeline1",\
            "default": false,\
            "maps": [\
                {\
                    "display_value": "Qualification",\
                    "sequence_number": 2,\
                    "actual_value": "Qualification",\
                    "id": "3652397000000006801"\
                },\
                {\
                    "display_value": "Needs Analysis",\
                    "sequence_number": 1,\
                    "actual_value": "Needs Analysis",\
                    "id": "3652397000000006803"\
                },\
                {\
                    "display_value": "Value Proposition",\
                    "sequence_number": 3,\
                    "actual_value": "Value Proposition",\
                    "id": "3652397000000006805"\
                },\
                {\
                    "display_value": "Proposal/Price Quote",\
                    "sequence_number": 4,\
                    "actual_value": "Proposal/Price Quote",\
                    "id": "3652397000000006811"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not included the pipeline ID in the request URL.

**Resolution:** You must include the ID of the pipeline you want to update in the URL.

- INVALID\_DATAHTTP 400



The ID of the pipeline in the request body is invalid.

**Resolution:** Use the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to obtain the unique IDs of the stages.

- INVALID\_DATAHTTP 400



The ID of the stage in the "maps" object is invalid.

**Resolution:** Use the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to obtain the unique IDs of the stages.

- INVALID\_DATAHTTP 400



The pipeline's ID in the request URL is invalid.

**Resolution:** Provide a valid pipeline ID. Use the [Get Pipelines API](https://www.zoho.com/crm/developer/docs/api/v7/get-pipelines.html) to obtain the pipeline's ID.

- CANNOT\_DELETEHTTP 400



You cannot delete the last stage of the pipeline.

**Resolution:** Add another stage to the pipeline before deleting the last one.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not included the mandatory parameter "layout\_id" in your request.

**Resolution:** Specify valid layout ID in the request.


#### Sample Response

``` json
Copied{
    "pipeline": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000003097007"\
            },\
            "message": "Pipeline updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-pipeline.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)