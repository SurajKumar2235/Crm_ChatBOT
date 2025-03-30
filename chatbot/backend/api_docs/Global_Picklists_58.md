

# Get Global Picklists

Global sets or global picklists are used to manage picklist values that are common across modules. Refer this [link](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/overview-of-global-sets) to know more about global picklists.

#### Purpose

To retrieve the details of global picklists configured in your Zoho CRM account.

#### Endpoints

[GET /settings/global\_picklists](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html)

[GET /settings/global\_picklists/{global\_picklist\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html)

### Request Details

#### Request URLs

**To retrieve all the global picklists:**

{api-domain}/crm/{version}/settings/global\_picklists

**To retrieve a specific global picklist:**

{api-domain}/crm/{version}/settings/global\_picklists/{global\_pick\_list\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.global\_picklist.READ

(or)

scope=ZohoCRM.settings.global\_picklist.ALL

#### Supported modules

Leads, Contacts, Accounts, Campaigns, Cases, Invoices, Deals, Price Books, Products, Purchase Orders, Quotes, Sales Orders, Solutions, Vendors, Calls, Tasks, Events, Users, DealHistory, QuotedItems, OrderedItems, PurchaseItems, InvoicedItems, Visits, Services, Appointments, and Custom.

#### Parameters

- includestring, optional



It is used to retrieve the list of modules with which the global picklist is associated.

**Possible values**:



- **used\_in\_modules** \- Retrieves the details of  modules in which the global picklist is used.
- **pick\_list\_values** \- It retrieves the details of all options of the global picklist. Use this value to retrieve all the available options in a global picklist when you perform bulk retrievals.

- include\_inner\_detailsstring, optional



It is used to retrieve additional details regarding the modules with which the global picklist is associated.

**Possible value**: **used\_in\_modules.plural\_label** \- To obtain the plural label of the module name.


#### Sample Request To Retrieve Bulk Global Picklists

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists?include=pick_list_values
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Possible Errors

- NO\_CONTENTHTTP 204



You have either passed an invalid ID in the request URL, or there are no global sets configured in your account.



**Resoution:** Check whether you have configured global picklists in your account. If yes, specify a valid picklist ID.

- INVALID\_REQUEST\_METHODHTTP 400



The https request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to create global picklists. Create a valid token with required scopes. Refer to the scope section above.

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
    "global_picklists": [\
        {\
            "display_label": "Source",\
            "modified_time": "2023-12-08T16:38:29+05:30",\
            "api_name": "Source",\
            "modified_by": {\
                "name": "Patricia",\
                "id": "2423488000000483001"\
            },\
            "description": null,\
            "pick_list_values_sorted_lexically": false,\
            "id": "2423488000000492003",\
            "presence": true,\
            "created_by": null,\
            "actual_label": "Source",\
            "pick_list_values": [\
                {\
                    "display_value": "-None-",\
                    "sequence_number": 0,\
                    "actual_value": "-None-",\
                    "id": "2423488000000492007",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Google+",\
                    "sequence_number": 1,\
                    "actual_value": "Google+",\
                    "id": "2423488000000492041",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Advertisement",\
                    "sequence_number": 2,\
                    "actual_value": "Advertisement",\
                    "id": "2423488000000492009",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Employee Referral",\
                    "sequence_number": 3,\
                    "actual_value": "Employee Referral",\
                    "id": "2423488000000492013",\
                    "type": "used"\
                },\
                {\
                    "display_value": "External Referral",\
                    "sequence_number": 4,\
                    "actual_value": "External Referral",\
                    "id": "2423488000000492015",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Partner",\
                    "sequence_number": 5,\
                    "actual_value": "Partner",\
                    "id": "2423488000000492017",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Trade Show",\
                    "sequence_number": 6,\
                    "actual_value": "Trade Show",\
                    "id": "2423488000000492021",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Seminar Partner",\
                    "sequence_number": 7,\
                    "actual_value": "Seminar Partner",\
                    "id": "2423488000000492023",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Online Store",\
                    "sequence_number": 8,\
                    "actual_value": "Online Store",\
                    "id": "2423488000000492025",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Chat",\
                    "sequence_number": 9,\
                    "actual_value": "Chat",\
                    "id": "2423488000000492027",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Sales Email Alias",\
                    "sequence_number": 10,\
                    "actual_value": "Sales Email Alias",\
                    "id": "2423488000000492029",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Internal Seminar",\
                    "sequence_number": 11,\
                    "actual_value": "Internal Seminar",\
                    "id": "2423488000000492031",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Web Download",\
                    "sequence_number": 12,\
                    "actual_value": "Web Download",\
                    "id": "2423488000000492033",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Web Research",\
                    "sequence_number": 13,\
                    "actual_value": "Web Research",\
                    "id": "2423488000000492035",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Twitter",\
                    "sequence_number": 14,\
                    "actual_value": "Twitter",\
                    "id": "2423488000000492037",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Facebook",\
                    "sequence_number": 15,\
                    "actual_value": "Facebook",\
                    "id": "2423488000000492039",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Public Relations",\
                    "sequence_number": 16,\
                    "actual_value": "Public Relations",\
                    "id": "2423488000000492019",\
                    "type": "unused"\
                },\
                {\
                    "display_value": "Cold Call",\
                    "sequence_number": 17,\
                    "actual_value": "Cold Call",\
                    "id": "2423488000000492011",\
                    "type": "unused"\
                }\
            ]\
        },\
        {\
            "display_label": "Industry",\
            "api_name": "Industry",\
            "modified_by": null,\
            "description": null,\
            "pick_list_values_sorted_lexically": false,\
            "id": "2423488000000492004",\
            "presence": true,\
            "created_by": null,\
            "actual_label": "Industry",\
            "pick_list_values": [\
                {\
                    "display_value": "-None-",\
                    "sequence_number": 0,\
                    "actual_value": "-None-",\
                    "id": "2423488000000492043",\
                    "type": "used"\
                },\
                {\
                    "display_value": "ASP (Application Service Provider)",\
                    "sequence_number": 1,\
                    "actual_value": "ASP (Application Service Provider)",\
                    "id": "2423488000000492045",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Data/Telecom OEM",\
                    "sequence_number": 2,\
                    "actual_value": "Data/Telecom OEM",\
                    "id": "2423488000000492047",\
                    "type": "used"\
                },\
                {\
                    "display_value": "ERP (Enterprise Resource Planning)",\
                    "sequence_number": 3,\
                    "actual_value": "ERP (Enterprise Resource Planning)",\
                    "id": "2423488000000492049",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Government/Military",\
                    "sequence_number": 4,\
                    "actual_value": "Government/Military",\
                    "id": "2423488000000492051",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Large Enterprise",\
                    "sequence_number": 5,\
                    "actual_value": "Large Enterprise",\
                    "id": "2423488000000492053",\
                    "type": "used"\
                },\
                {\
                    "display_value": "ManagementISV",\
                    "sequence_number": 6,\
                    "actual_value": "ManagementISV",\
                    "id": "2423488000000492055",\
                    "type": "used"\
                },\
                {\
                    "display_value": "MSP (Management Service Provider)",\
                    "sequence_number": 7,\
                    "actual_value": "MSP (Management Service Provider)",\
                    "id": "2423488000000492057",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Network Equipment Enterprise",\
                    "sequence_number": 8,\
                    "actual_value": "Network Equipment Enterprise",\
                    "id": "2423488000000492059",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Non-management ISV",\
                    "sequence_number": 9,\
                    "actual_value": "Non-management ISV",\
                    "id": "2423488000000492061",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Optical Networking",\
                    "sequence_number": 10,\
                    "actual_value": "Optical Networking",\
                    "id": "2423488000000492063",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Service Provider",\
                    "sequence_number": 11,\
                    "actual_value": "Service Provider",\
                    "id": "2423488000000492065",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Small/Medium Enterprise",\
                    "sequence_number": 12,\
                    "actual_value": "Small/Medium Enterprise",\
                    "id": "2423488000000492067",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Storage Equipment",\
                    "sequence_number": 13,\
                    "actual_value": "Storage Equipment",\
                    "id": "2423488000000492069",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Storage Service Provider",\
                    "sequence_number": 14,\
                    "actual_value": "Storage Service Provider",\
                    "id": "2423488000000492071",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Systems Integrator",\
                    "sequence_number": 15,\
                    "actual_value": "Systems Integrator",\
                    "id": "2423488000000492073",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Wireless Industry",\
                    "sequence_number": 16,\
                    "actual_value": "Wireless Industry",\
                    "id": "2423488000000492075",\
                    "type": "used"\
                }\
            ]\
        },\
        .\
        .\
        .\
            ]
        }
    ]
}
```

Show full

Show less

#### Sample Request To Retrieve a single Global Picklist

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/global_picklists/2423488000000725001?include=used_in_modules&include_inner_details=used_in_modules.plural_label
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"

```

#### Sample Response

``` json
Copied{
    "global_picklists": [\
        {\
            "display_label": "SourceTest",\
            "created_time": "2023-12-08T11:22:56+05:30",\
            "used_in_modules": [\
                {\
                    "plural_label": "Leads",\
                    "api_name": "Leads",\
                    "id": "2423488000000000125"\
                },\
                {\
                    "plural_label": "Contacts",\
                    "api_name": "Contacts",\
                    "id": "2423488000000000129"\
                }\
            ],\
            "api_name": "SourceTest",\
            "modified_by": null,\
            "description": "desc",\
            "pick_list_values_sorted_lexically": false,\
            "id": "2423488000000725001",\
            "presence": true,\
            "created_by": {\
                "name": "Patricia",\
                "id": "2423488000000483001"\
            },\
            "actual_label": "SourceTest",\
            "pick_list_values": [\
                {\
                    "display_value": "-None-",\
                    "sequence_number": 0,\
                    "actual_value": "-None-",\
                    "id": "2423488000000725011",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Cold Call",\
                    "sequence_number": 1,\
                    "actual_value": "Cold Call",\
                    "id": "2423488000000725002",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Facebook",\
                    "sequence_number": 2,\
                    "actual_value": "Facebook",\
                    "id": "2423488000000725004",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Google+",\
                    "sequence_number": 3,\
                    "actual_value": "Google+",\
                    "id": "2423488000000725006",\
                    "type": "used"\
                },\
                {\
                    "display_value": "Twitter",\
                    "sequence_number": 4,\
                    "actual_value": "Twitter",\
                    "id": "2423488000000725008",\
                    "type": "unused"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)