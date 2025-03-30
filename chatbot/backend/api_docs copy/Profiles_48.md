
# Profiles

In Zoho CRM, the administrator assigns a profile to every user which decides the user's level of access to Zoho CRM data. Use this API to get the details of different profiles.

### Get Profiles

#### Purpose

To retrieve the data of profiles of your organization.

#### Endpoints

[GET /settings/profiles](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html)

[GET /settings/profiles/{profile\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/profiles

**To get a specific profile:**

{api-domain}/crm/{version}/settings/profiles/{profile\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.profiles.{operation\_type}

#### Possible operation types

ALL - Full access to profiles data

READ - Retrieve profiles data

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/profiles/3652397000000026011"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/profiles"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- display\_labelstring



Represents the display name of the current profile.

- created\_timestring



Represents the date and time at which the current profile was created.

- modified\_timestring



Represents the date and time at which the current profile was last modified.

- namestring



Represents the name of the profile.

- modified\_byJSON object



Represents the name and ID of the user who last modified the current profile.

- descriptionstring



Represents the description of the profile, if any.

- idstring



Represents the unique ID of the profile.

- created\_byJSON object



Represents the name and ID of the user who created the current profile.

- typestring



Represents if the profile is a **normal\_profile**, **lite\_profile** or **portal\_profile**.

- permissions\_detailsJSON array



Gives the details of the view, create, edit, and delete permissions given to the profile for different modules. Note that this array is rendered in the response only when you fetch a specific profile.


**Note**

- The object with display\_label **zmeeting** is removed from the **permission\_details** array.
- In the response, under **tool** \> **categories**, individual JSON objects are added for the features Zia and Share.

#### Sample Response

``` json
Copied{
  "profiles": [\
    {\
      "display_label": "Administrator",\
      "created_time": null,\
      "modified_time": null,\
      "custom": false,\
      "permissions_details": [\
        {\
          "display_label": "View",\
          "module": "Leads",\
          "name": "Crm_Implied_View_Leads",\
          "id": "3652397000000026113",\
          "enabled": true\
        },\
        {\
          "display_label": "Create",\
          "module": "Leads",\
          "name": "Crm_Implied_Create_Leads",\
          "id": "3652397000000026107",\
          "enabled": true\
        },\
        {\
          "display_label": "Edit",\
          "module": "Leads",\
          "name": "Crm_Implied_Edit_Leads",\
          "id": "3652397000000026110",\
          "enabled": true\
        },\
        {\
          "display_label": "Delete",\
          "module": "Leads",\
          "name": "Crm_Implied_Delete_Leads",\
          "id": "3652397000000026116",\
          "enabled": true\
        },\
        {\
          "display_label": "View",\
          "module": "Contacts",\
          "name": "Crm_Implied_View_Contacts",\
          "id": "3652397000000026155",\
          "enabled": true\
        }...\
      ]\
    }\
  ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)