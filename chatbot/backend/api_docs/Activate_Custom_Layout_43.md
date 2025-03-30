# Activate Custom Layout

#### Purpose

To activate a previously deactivated custom layout.

#### Endpoints

[POST /settings/layouts/{deactivated\_layout\_id}/actions/activate?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/activate-custom-layout.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts/{layout\_id}/actions/activate

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.layouts.CREATE (or)

scope = ZohoCRM.settings.layouts.ALL (or)

scope = ZohoCRM.settings.ALL

#### Parameter

- modulestring, mandatory



Specify the module API name where you want to activate a previously deactivated layout. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the module API names. Supported modules are Leads, Contacts, Accounts, Deals, Products, Quotes, Sales Orders, Purchase, Orders, Invoices, Campaigns, Vendors, Price Books, Cases, Solutions, and Custom.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/5725767000002483149/actions/activate?module=Leads"
-X POST
-d "@input.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Input JSON Keys

- profilesJSON array, mandatory



Specify the profile IDs that should have access to the layout. Specify atleast **one** profile to access the layout. You can retrieve profile IDs using the [GET Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html).


#### Sample Input

``` json
Copied{
    "layouts": [\
        {\
            "profiles": [\
                {\
                    "id": "5725767000000871001"\
                },\
                {\
                    "id": "5725767000000091055"\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- ALREADY\_ACTIVATEDHTTP 400

Cannot activate the active layout

Please specify a valid and deactivated layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs. The **status** key in the response from the _Layout Metadata API_ indicates whether the layout is _**active**_ or _**inactive**_.

- NOT\_ALLOWEDHTTP 400

Only profiles associated with the module can be assigned for the layout

**Resolution:** Assign valid profiles to the layout.

- MANDATORY\_NOT\_FOUNDHTTP 400

Mandatory field is missing

**Resolution:** Assign at least one profile to activate a layout. Use the [GET Profiles API](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) to retrieve the IDs of the Profiles.


#### Sample Response

``` json
Copied{
    "layouts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002483149"\
            },\
            "message": "layout activated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/activate-custom-layout.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)