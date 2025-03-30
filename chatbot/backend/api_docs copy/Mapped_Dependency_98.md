
# Delete Mapped Dependency

#### Purpose

To delete the dependency mapped for the picklist fields on a layout of the module in Zoho CRM.

#### Endpoints

[DELETE /settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}?module={module\_API\_name}](https://www.zoho.com/crm/developer/docs/api/v7/delete-map-dependency.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/layouts/{layout\_ID}/map\_dependency/{map\_dependency\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.settings.map\_dependency.DELETE

or

ZohoCRM.settings.map\_dependency.ALL

#### Parameters

- modulestring, mandatory



The API name of the module you want to delete the mapped dependency fields from. Supported modules are Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Services, Appointments, and Custom modules. Retrieve the module API names using the [GET - Modules Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html).


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/layouts/3652397000000091055/map_dependency/3652397000009835004?module=Leads"
-X DELETE
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Possible Errors

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not specified the **module** parameter in the request URL.

**Resolution:** The module name is mandatory to delete the mapped dependency fields from that module.

- INVALID\_MODULEHTTP 400



The module name is invalid or the module is not supported in API.

**Resolution:** You must use the correct API name of the module.

- INVALID\_DATAHTTP 400



Reasons:



- The layout's ID is invalid.
- The layout is deactivated.
- The map dependency ID is invalid.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly.

- NOT\_ALLOWEDHTTP 400



Reasons:



- This API is not supported in your organization's sandbox account.
- You cannot delete internal map dependency fields

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** You do not have ZohoCRM.settings.map\_dependency.DELETE scope. Create new tokens with valid scope. Refer to the scope section above.


#### Sample Response

``` json
Copied{
    "map_dependency": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009835004"\
            },\
            "message": "map dependency deleted",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/delete-map-dependency.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)