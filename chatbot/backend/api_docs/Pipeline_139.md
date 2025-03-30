
# Create a Pipeline

#### Purpose

To create a pipeline with various stages that a deal passes through.

#### Endpoints

[POST /settings/pipeline?layout\_id={layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/create-pipeline.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/pipeline?layout\_id={layout\_id}

#### Header

**Authorization**: Zoho-oauthtoken <access\_token>

#### Scope

scope=ZohoCRM.settings.pipeline.CREATE

##### Parameters

- layout\_idstring, mandatory



The unique ID of the layout in which the pipeline must be created.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/pipeline?layout_id=3652397000000091023"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

##### Request JSON

- display\_valueString, mandatory



The name of the pipeline you want to create. This key accepts an alphanumeric value.

- mapsJSON array, mandatory



The different stages that a deal has to pass through in the sales pipeline. Thi array contains the following keys:



- **sequence\_number** \- _integer, mandatory_ \- The order in which the stage must be displayed. If the value of this key is "1", then this stage will be displayed first.
- **id** \- _string, mandatory_ \- The unique ID of the stage. Use the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to obtain the unique ID of the field.

#### Sample Input

``` json
Copied{
    "pipeline": [\
        {\
            "display_value": "Pipeline2",\
            "default": true,\
            "maps": [\
                {\
                    "sequence_number": 1,\
                    "id": "3652397000000006815",\
                    "display_value": "Closed Won"\
                },\
                {\
                    "sequence_number": 2,\
                    "id": "3652397000000006817",\
                    "display_value": "Closed Lost"\
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



You have not included the key "display\_value" (name of the pipeline) in the input.

**Resolution:** "display\_value" is a mandatory key in the input.

- INVALID\_DATAHTTP 400



The ID of the stage in the "maps" object is invalid.

**Resolution:** Use the [Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to obtain the unique IDs of the stages.

- DUPLICATE\_DATAHTTP 400



A pipeline with the same name already exists.

**Resolution:** The name of the pipeline must be unique.

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
                "id": "3652397000003712004"\
            },\
            "message": "Pipeline created",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-pipeline.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)