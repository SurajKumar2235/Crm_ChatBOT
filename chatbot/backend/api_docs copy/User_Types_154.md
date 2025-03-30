# User Types in Portals

User type is a label for the users who will be accessing the CRM modules via portal. You can configure permissions for the user types that will enable or restrict access to the data in the CRM account. Some examples of portal user types are vendors, clients, consultants, customers, partners, or resellers.

## Get Portal User Types

#### Purpose

To get the user types available in a portal of your org.

#### Endpoints

[GET /settings/portals/{portal\_name}/user\_type](https://www.zoho.com/crm/developer/docs/api/v7/get-user-types.html)

[GET /settings/portals/{portal\_name}/user\_type/{user\_type\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-user-types.html)

### Request Details

#### Request URL

**Get all user types** \- {api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type

**Get a specific user type** \- {api-domain}/crm/{version}/settings/portals/{portal\_name}/user\_type/{user\_type\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.clientportal.ALL

(or)

Scope=ZohoCRM.settings.clientportal.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/portals/PortalsAPItest200/user_type/3652397000006231003"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
```

#### Response JSON

- default



Represents whether the user type is the default one for the portal.

- personality\_module



The API name and ID of the module for which the user type was configured.

- name



The name of the user type.

- active



Boolean key that indicated whether the user type is active or not.

- no\_of\_users



The number of users in the portal that are assigned with this user type.

- modules



The details of the modules that are available for this user type. This JSON array also has the details of the "fields", "layouts", the "views"(List view or Canvas view) that this user type has access to, and the permissions such as edit, create, view etc., that are granted.


#### Possible Errors

- INVALID\_DATAHTTP 400



The portal name is invalid.

**Resolution:** Specify the right portal name in the request. Refer to the key "name" in the response of the [Get Portal API](https://www.zoho.com/crm/developer/docs/api/v7/get-portals.html).

- NO\_PERMISSIONHTTP 403



You do not have "Manage Portal" and "Manage Portal Users" permissions.

**Resolution:** Contact your administrator.


#### Sample Response

``` json
Copied{
  "user_type": [\
    {\
      "default": true,\
      "personality_module": {\
        "plural_label": "Contacts",\
        "api_name": "Contacts",\
        "id": "3652397000000002179"\
      },\
      "name": "Vendor",\
      "active": true,\
      "id": "3652397000006231003",\
      "no_of_users": 2,\
      "modules": [\
        {\
          "plural_label": "Contacts",\
          "shared_type": "private",\
          "api_name": "Contacts",\
          "permissions": {\
            "view": true,\
            "edit": false,\
            "edit_shared_records": false,\
            "create": false,\
            "delete": false\
          },\
          "id": "3652397000000002179",\
          "filters": null,\
          "fields": [\
            {\
              "read_only": false,\
              "api_name": "Owner",\
              "id": "3652397000000002485"\
            }....\
          ],\
          "layouts": [\
            {\
              "display_label": "Standard",\
              "name": "Standard",\
              "id": "3652397000000091033"\
            }\
          ],\
          "views": {\
            "display_label": "Default List View",\
            "name": "All_Contacts",\
            "id": "3652397000000087529",\
            "type": "custom_view"\
          }\
        }\
      ]\
    }\
  ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-types.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)