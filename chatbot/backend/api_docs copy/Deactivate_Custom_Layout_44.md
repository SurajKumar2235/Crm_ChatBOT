
# Deactivate Custom Layout

#### Purpose

To deactivate a custom layout.

#### Endpoints

[DELETE /settings/layouts/{layout\_id\_to\_deactivate}/actions/activate?module={module\_api\_name}&transfer\_to={target\_layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/deactivate-custom-layout.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts/{layout\_id\_to\_deactivate}/actions/activate

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.layouts.DELETE (or)

scope = ZohoCRM.settings.layouts.ALL (or)

scope = ZohoCRM.settings.ALL

#### Parameter

- modulestring, mandatory



Specify the module API name where you want to deactivate a custom layout. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the module API names. Supported modules are Leads, Contacts, Accounts, Deals, Products, Quotes, Sales Orders, Purchase, Orders, Invoices, Campaigns, Vendors, Price Books, Cases, Solutions, and Custom.

- transfer\_tostring, mandatory



Specify the ID of the layout to which you want to transfer the records before deactivating the current layout. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to get the layout IDs.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/5725767000002256361/actions/activate?module=Testings&transfer_to=5725767000002234002"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Possible Errors

- INVALID\_DATAHTTP 400

The transfer\_to layout ID provided seems to be invalid.

**Resolution:** Specify a valid layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve layout IDs.

- NOT\_ALLOWEDHTTP 400

Cannot transfer to the deactivated layout

**Resolution:**  The layout ID specified in the " **transfer\_to**" parameter has been deactivated. Specify an active layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs. The **status** key in the response from the Layout Metadata API indicates whether the layout is _**active**_ or _**inactive**_.

- ALREADY\_DEACTIVATEDHTTP 400

Given layout ID has already been deactivated

**Resolution:** Specify an active layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs. Use _**status**_ in the _**fields**_ parameter to know the list of active layouts.


#### Sample Response

``` json
Copied{
    "layouts": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002256361"\
            },\
            "message": "layout deactivated",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/deactivate-custom-layout.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)