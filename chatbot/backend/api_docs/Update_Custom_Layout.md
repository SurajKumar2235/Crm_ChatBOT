
    - field\_labelstring, optional



      Represents the label of the field.

    - data\_typestring, optional(The "datatype" or "id" is mandatory for updating a field)



      Represents the datatype of the field.

    - idstring, optional (The "datatype" or "id" is mandatory for updating a field)



      Represents the unique ID of the field.

    - \_deleteJSON object, optional



      This key lets you to move fields from the current layout to **Unused Items.**



      - permanentboolean, mandatory



        Represents whether the fields should be temporarily moved to **Unused Items**.  **Possible Value :** false.
    - requiredboolean, optional



      Specify whether a field should be mandatory or not. Note that you can only mark a field as mandatory using the Layouts API.

**Notes**

- A maximum of **five** actions **(create, update, or delete)** can be performed on **fields** within the **specified sections** of a layout in a **single API** **call**.
- Maximum of **five** sections can be created in a single API call.
- The data types **email** and **textarea** do not support external fields.
- In the tooltip key, the **static\_text** value is limited to **35 characters**, and the **info\_icon** value is limited to **255 characters**.
- You can create a maximum of **two unique fields** per module in all editions.
- You can create a maximum of **one auto-number** field in a module.
- For more details about fields creation, see [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) help document.
- The **unique** key is not allowed for the **imageupload** data type.
- The API name of a layout cannot be changed.
- All the field types and their possible error cases, as explained in the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) and [Update Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-fields.html) help documents, are applicable for creating and updating fields in a layout.

#### Sample input for manipulating fields within an existing layout

``` json
Copied{ //Creating, Updating, moving fields to "Unsed Items" in an existing sections in a layout
    "layouts": [\
        {\
            "sections": [\
                {\
                    "id": "5725767000002277007",\
                    //manipulating fields in an existing layout under an existing section\
                    "fields": [\
                        {\
                            "field_label": "Subcriber Namee",\
                            "data_type": "text" //creating a new field\
                        },\
                        {\
                            "id": "5725767000002235077", //existing field ID\
                            "field_label": "Multiple Notes" //updating an existing field\
                        },\
                        {\
                            "id": "5725767000002288647",\
                            "_delete": {\
                                "permanent": false //moving field to the "Unused Items"\
                            }\
                        },\
                        {\
                            "id": "5725767000003613091",\
                            "required": true //Marking the field as mandatory.\
                        }\
                    ]\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Sample input to create a "New Section" and to update an existing section

``` json
Copied{ //Actions on creating a new section, updating an existing section
    "layouts": [\
        {\
            "sections": [\
                {\
                    "display_label": "Personal Details",\
                    "fields": [\
                        {\
                            "field_label": "Age",\
                            "data_type": "integer"\
                        }\
                    ]\
                },\
                {\
                    "id": "5725767000002277006",\
                    "display_label": "Profile"\
                },\
                {\
                    "id": "5725767000002324138",\
                    "_delete": {\
                        "permanent": false //moving field to the "Unused Items"\
                    }\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_DATAHTTP 400



- API name cannot be changed

**Resolution:** Field API names in layouts can be edited only via UI.
- Invalid data.

**Resolution:**  The given input data seems to be invalid. Specify a valid input to update a layout. Refer to the [Request JSON](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Input) section.
- Invalid ID

**Resolution:** The provided field or section ID seems to be invalid. Please specify valid inputs to update a layout. To know the section IDs of the layouts, use the [Layouts Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html).
- Invalid section name.

**Resolution:** The provided section name seems to be invalid. Please specify a valid section name to update a layout.
- Invalid value of the tab\_traversal key

**Resolution:** Specify a valid value for the **tab\_traversal** key. Supported values are **top\_to\_bottom** and **left\_to\_right**.
- Invalid value of the **column\_count** key

**Resolution:** Arrange a set of fields in a section in columns. Supported values are **1** and **2**.
- Invalid value given for the **name** key of the tooltip

**Resolution:** Specify a valid data. Supported values are static\_text and info\_icon.

- EXPECTED\_FIELD\_MISSINGHTTP 400



One or more expected keys are missing

**Resolutions:**



- To update a section in a layout, **section ID** is mandatory. Use the [Layouts Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html), to retrieve unique section IDs.
- To create a new section, the **display\_label** key is mandatory. Refer to the [Request JSON](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Input) section.

- NOT\_ALLOWEDHTTP 400



- API name cannot be changed

**Resolutions:** Field API names in layouts can be edited only via UI.
- The text area length cannot be changed

**Resolutions:** The type value cannot be updated to another type, for example, from small to rich\_text. _Sample: "textarea" : { "type": "small" }._
- The API name of the Layout cannot be changed

**Resolutions:** You cannot change the API name of the layout.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



One or more dependent fields are missing

**Resolution:** Specify all the dependent fields in the input body. Please refer to the [Request JSON](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Input) section.

- DUPLICATE\_DATAHTTP 400



Given input contains one or more duplicate section labels

**Resolutions:** Please specify unique section labels and a unique layout name. Refer to the [Request JSON](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Input) section.

- EXPECTED\_DEPENDENT\_FIELD\_MISSINGHTTP 400



Either global\_picklist or picklist values is expected

**Resolution:** Specify the dependent fields to create a picklist or global picklist field in a layout. Refer to the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) for more information.

- DEPENDENT\_MISMATCHHTTP 400



The dependent keys of a field seem to be mismatched

**Resolution:** Specify valid dependent keys and their corresponding values for the fields.  Refer to the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html)  for details on the fields and their dependent keys, along with examples.

- NO\_PERMISSIONHTTP 400



Permission denied

**Resolution:** You have no permission to update the layout. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required parameter is missing

**Resolution:** Specify a mandatory parameter. Refer to the [Parameters](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Parameters) section.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the [Endpoints](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#three) section.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to update a custom layout. Create a new token with the required scopes. Refer to the [Scope](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#Scope) section.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the [Request URL](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#URL) section.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "layouts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002277002"\
            },\
            "message": "layout updated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-custom-layout.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)