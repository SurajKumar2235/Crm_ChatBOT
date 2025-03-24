# Create a User Type

#### Purpose

To create a user type in a portal.

#### Endpoints

[POST /settings/portals/{portal\_name}/user\_type](https://www.zoho.com/crm/developer/docs/api/v7/create-user-type.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.CREATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/portals/ZohoTest17/user_type"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
```

##### Input JSON

- namestring, mandatory



The name of the user type you want to create.

- personality\_modulestring, mandatory



The API name of the personality module whose records can be viewed by the portal users.

- activeboolean, optional



The status of the user type. The value **true** activates this user type and you can add users to this user type. The value **false** creates the user type in the disabled mode. This is the default value.

- modulesJSON array, mandatory



The modules which are linked through lookup or multi-select lookup fields to the personality module. This array contains the following keys, each JSON object pertaining to the personality module and the related modules. Note that this array must contain an object each for the personality module and the Notes module besides the related modules.



- **layouts** \- _JSON array, mandatory_ \- The unique ID of the layout of the module.
- **permissions** \- _JSON object, mandatory_ \- Boolean key-value pairs that represent the permissions you want the users to have in the module. The possible keys are **view**, **edit**, **create**.
- **views** \- _JSON object, mandatory_ \- The ID and **type** of the view the users can have access to. The possible values for **type** are **custom\_view** and **canvas\_view**.
- **filters** \- _JSON array, mandatory_ \- The ID of the field based on whose values the portal users will view the records by using the lookup filter and multi-select lookup field. For example, if you have added two lookup fields in the Deals module, you can choose a lookup based on the records that you want the portal user to view.
- **id** \- _string, mandatory_ \- The ID of the module.
- **fields** \- _JSON array, mandatory_ \- The ID and view type(read-only:true/false) of the fields that the users of this user type can have access to. Note that if any of the fields in the layout is marked mandatory, they cannot be read-only in the portal.
- **shared\_type** \- _string, mandatory_ \- Represents whether the module is a private or public module. the possible values are **private** and **public**.

For the Notes module, **layout**, **filter**, **view** can be null.

#### Input JSON

``` json
Copied{
    "user_type": [\
        {\
            "name": "lead",\
            "personality_module": {\
                "api_name": "Leads"\
            },\
            "active": true,\
            "modules": [\
                {\
                    "layouts": [\
                        {\
                            "id": "1947281000000095055"\
                        }\
                    ],\
                    "permissions": {\
                        "view": true\
                    },\
                    "views": {\
                        "id": "1947281000000091501",\
                        "type": "custom_view"\
                    },\
                    "filters": null,\
                    "fields": [\
                        {\
                            "id": "1947281000000003857",\
                            "read_only": false\
                        }\
                    ],\
                    "id": "1947281000000000125",\
                    "shared_type": "private"\
                },\
                {\
                    "layouts": null,\
                    "permissions": {\
                        "view": true\
                    },\
                    "views": null,\
                    "filters": null,\
                    "id": "1947281000000000147",\
                    "shared_type": "private"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- DEPENDENT\_FIELD\_MISSINGHTTP 400



You have not specified the **layout** key in the input in the **modules** JSON array.

**Resolution:** Each private module should contain at least one layout.

- NOT\_ALLOWEDHTTP 400



The given layout does not have the specified filter in it.

**Resolution:** Ensure that the field specified in the "filter" key is a part of the layout.

- REQUIRED\_PARAM\_MISSINGHTTP 400



One or more mandatory parameters are missing in the input.

**Resolution:** The "details" key in the response gives you the missing key from the input. You can also refer to the Input JSON section and ensure that all keys marked "mandatory" are included in the input.

- INVALID\_DATAHTTP 400



The field is not allowed in Portals.

**Resolution**: The "details" key in the response gives you the path to the field that is not allowed in Portals. Remove the field and try with an allowed field.

- LICENSE\_LIMIT\_EXCEEDEDHTTP 400



You have exceeded the portal user license limit.

**Resolution**: You can only add up to 5 user types per organization. Contact support@zohocrm.com to purchase more user licenses.


#### Sample Response

``` json
Copied{
    "user_type": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "1947281000000470169"\
            },\
            "message": "user type created successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-user-type.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)