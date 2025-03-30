
# Update a User Type

#### Purpose

To update the details of a user type in a portal.

#### Endpoints

[PUT /settings/portals/{portal\_name}](https://www.zoho.com/crm/developer/docs/api/v7/update-user-type.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope= ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.UPDATE

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/ZohoTest17/user_type/1947281000000470169"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT
-d "@inputData.json"
```

##### Input JSON

- namestring, mandatory



The name of the user type you want to update.

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

The key **\_delete** will delete the field from the user type.
- **shared\_type** \- _string, mandatory_ \- Represents whether the module is a private or public module. the possible values are **private** and **public**.

For the Notes module, **layout**, **filter**, **view** can be null.

#### Input JSON

``` json
Copied{
    "user_type": [\
        {\
            "modules": [\
                {\
                    "id": "1947281000000000125",\
                    "permissions": {\
                        "edit": true,\
                        "create": true\
                    },\
                    "shared_type": "private",\
                    "fields": [\
                        {\
                            "id": "111118000000003857",\
                            "_delete": true,\
                            "read_only": true\
                        }\
                    ]\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- DUPLICATE\_DATAHTTP 400



**Reasons:**



- When you want to update the ID of the field in the "filters" object, the new field is already associated to the user type.
- When you want to update the "name" of the user type, another user type with the same name exists already.

**Resolutions:** "user\_type.modules.filters.id" and "name" must be unique values.

- INVALID\_DATAHTTP 400



**Reasons:**



- The field whose ID is mentioned in the "filters" key is not related to the personality module you want to create the user type for.
- When you want to update the "name" of the user type, another user type with the same name exists already.
- You have given the value for "view" as false. The module must have "view" permission.
- The custom view or canvas view whose ID you have given in the "views" object does not belong to the module.
- The field whose ID you have given in the "filters" key is not related to the personality module.
- When you change the user type, the related modules of the old user type are not the related modules of the new user type. In this case, you must only input the details of the related modules of the new user type.
- You have marked the mandatory field in the layout as read-only in the user type. When a field in the layout is mandatory, you must make the field editable for the users of that user type.

- CANNOT\_REMOVEHTTP 400



You are trying to remove the layouts, mandatory fields, or modules from the user type.

**Resolution:** The details of at least one layout, the personality module(the module that you are creating the user type for) and Notes module are mandatory. You must also include the details of the mandatory fields of the layout in the "fields" array.

- INVALID\_MODULEHTTP 400



**Reasons:**



- You are trying to add the details of the module that are not related to the personality module.
- The module is set as public, but the shared\_type is private in the input.

**Resolution:** Ensure you give only the details of the related modules and that the shared type is set to public for public modules.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



Either the layout ID or the view's ID is missing.

**Resolution:** Refer to the details key in the response to know the details of the dependent fields that are missing in the input.

- NOT\_ACTIVE\_PERSONALITY\_MODULEHTTP 400



The personality module you are trying to create a user type for is inactive.

**Resolution**: Activate the module and try again.

- INVALID\_REQUESTHTTP 400



Ensure that you have specified valid parameters, their values, and URL.

- INVALID\_REQUEST\_METHODHTTP 400



The HTTP method is invalid.

**Resolution:** The HTTP method to update the user type is PUT.


``` json
Copied{
    "user_type": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "1947281000000470169"\
            },\
            "message": "Portal user type updated successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-user-type.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)