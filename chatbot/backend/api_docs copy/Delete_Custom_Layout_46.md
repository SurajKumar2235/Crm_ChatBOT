
# Delete Custom Layout

#### Purpose

To delete a custom layout and transfer its records to another active layout.

#### Endpoints

[DELETE /settings/layouts/{layout\_id}?module={module\_api\_name}&transfer\_to={target\_layout\_id}](https://www.zoho.com/crm/developer/docs/api/v7/delete-custom-layout.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts/{layout\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope = ZohoCRM.settings.layouts.DELETE (or)

scope = ZohoCRM.settings.layouts.ALL (or)

scope = ZohoCRM.settings.ALL

#### Parameters

- modulestring, mandatory



Specify the module API name from which you want to delete the custom layout. Use the [GET Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the module API names. Supported modules are Leads, Contacts, Accounts, Deals, Products, Quotes, Sales Orders, Purchase, Orders, Invoices, Campaigns, Vendors, Price Books, Cases, Solutions, and Custom.

- transfer\_tostring, mandatory



Specify the ID of the layout to which you want to transfer the records. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to get the layout IDs.


**Note**

You can delete **one** custom layout in a single API call.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/5725767000002269121?module=Leads&transfer_to=5725767000002256361"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- INVALID\_DATAHTTP 400



Given ID of the layout seems to be invalid

**Resolution:** Specify a valid layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs.

- NOT\_ALLOWEDHTTP 400



- Cannot transfer to the deactivated layout

**Resolution:** The layout ID specified in the "transfer\_to" parameter has been deactivated. Specify an active layout ID. The status key in the response from the Layout Metadata API indicates whether the layout is _**active**_ or _**inactive**_.
- You cannot delete the system-defined layout

**Resolution:** Only **custom layouts** can be **deleted**. Please specify a custom layout ID. Use the [GET Layout Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/layouts-meta.html) to retrieve unique layout IDs. For custom layouts, the key **"generated\_type"** will be set to **"custom"**.

- NO\_PERMISSIONHTTP 400



Permission denied

**Resolution:**  You do not have permission to delete the layout. Contact your system administrator.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required parameter is missing

**Resolution:** Specify all the mandatory parameters. See the **Parameter** section above.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to delete a custom layout. Create a new token with the required scopes. Refer to the scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

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
                "id": "5725767000002256447"\
            },\
            "message": "layout deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-custom-layout.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)