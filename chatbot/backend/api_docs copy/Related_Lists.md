
# Related Lists Metadata

#### Purpose

To get the metadata of the related lists in a particular module.

#### Endpoints

[GET /settings/related\_lists?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/related-list-meta.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/related\_lists?module={module\_api\_name}

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Events, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Services and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.related\_lists.READ

(or)

scope=ZohoCRM.settings.related\_lists.ALL

(or)

scope=ZohoCRM.settings.ALL

#### Parameters

- modulestring, mandatory



Specify the API name of the required module. For example, Leads, Contacts, Accounts, Deals, and so on.

- layout\_idstring, optional



Specify the unique ID of the layout to fetch the metadata of the related lists specific to that layout. If you do not include this parameter, the metadata of the related lists is fetched from the Standard layout.


**Note**

- The "href" attribute in the response must be used in the URL to call the related list API. For example, the URL for calling the related list API must be: https://www.zohoapis.com/crm/v7/Leads/{ENTITYID}/Entity\_Scores\_\_s.

#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/related_lists?module=Leads"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

``` deluge
Copiedresponse = invokeurl
[\
	url: "https://www.zohoapis.com/crm/v7/settings/related_lists?module=Leads"\
	type: GET\
	connection:"crm_oauth_connection"\
];
info response;
```

#### Response JSON Keys

- sequence\_numberinteger



Represents the position of the related list in the module, in CRM.

- display\_labelstring



Represents the display name of the related list.

- customize\_sortboolean



Represents if the records in the related list can be sorted.

- customize\_fieldsboolean



Represents if the fields of the related list can be customized.

- customize\_display\_labelboolean



Represents if the display label of the related list can be customized.

- api\_namestring



Represents the API name of the related list.

- moduleJSON object



Represents the API name and ID of the module which the related list belongs to.

- namestring



Represents the display name of the module to which the related list belongs to.

- idstring



Represents the unique ID of the related list.

- hrefstring



Represents the URL reference to access the current related list.

- typestring



Represents the type of the current related list. The value can be either default or multiselectlookup.

- connectedmodulestring



If the related list is a multi-select lookup, the key represents the API name of the related module.

- linkingmodulestring



Represents the API name of the linking module.

- parent\_related\_listsstring



Represents the details of modules configured for Chronological\_View and Chronological\_View\_History related lists

- fields string



Represents the details of fields configured for Chronological\_View and Chronological\_View\_History related lists

- status string



Represents whether the related list is _visible_ or _hidden_ in the module. **Possible Values :** visible, user\_hidden, and scheduled\_for\_deletion.


#### Sample Response

``` json
Copied{
    "related_lists": [\
        {\
            "module": {\
                "api_name": "Entity_Cadences__s",\
                "id": "2276164000000833075"\
            },\
            "type": "default",\
            "sequence_number": "1",\
            "display_label": "Cadences",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Entity_Cadences_leads",\
            "customize_display_label": false,\
            "name": "Cadences",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Entity_Cadences_leads",\
            "id": "2276164000000833156",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Notes",\
                "id": "2276164000000000147"\
            },\
            "type": "default",\
            "sequence_number": "1",\
            "display_label": "Notes",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Notes",\
            "customize_display_label": false,\
            "name": "Notes",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Notes",\
            "id": "2276164000000002730",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Attachments",\
                "id": "2276164000000000177"\
            },\
            "type": "default",\
            "sequence_number": "2",\
            "display_label": "Attachments",\
            "customize_sort": true,\
            "customize_fields": false,\
            "api_name": "Attachments",\
            "customize_display_label": false,\
            "name": "Attachments",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Attachments",\
            "id": "2276164000000002724",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Products",\
                "id": "2276164000000000163"\
            },\
            "type": "default",\
            "sequence_number": "3",\
            "display_label": "Products",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Products",\
            "customize_display_label": false,\
            "name": "Products",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Products",\
            "id": "2276164000000002726",\
            "status": "visible"\
        },\
        {\
            "module": null,\
            "parent_related_lists": null,\
            "type": "grouped",\
            "sequence_number": "4",\
            "display_label": "ChronologicalView",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Activities_Chronological_View",\
            "customize_display_label": true,\
            "name": "ChronologicalView",\
            "action": null,\
            "href": null,\
            "id": "2276164000000472680",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Calls",\
                "id": "2276164000000017015"\
            },\
            "type": "default",\
            "sequence_number": "4",\
            "display_label": "Open Calls",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Calls",\
            "customize_display_label": false,\
            "name": "Calls",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Calls",\
            "id": "2276164000000371752",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Events",\
                "id": "2276164000000000145"\
            },\
            "type": "default",\
            "sequence_number": "4",\
            "display_label": "Open Meetings",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Events",\
            "customize_display_label": false,\
            "name": "Events",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Events",\
            "id": "2276164000000371750",\
            "status": "visible"\
        },\
        {\
            "module": {\
                "api_name": "Tasks",\
                "id": "2276164000000000143"\
            },\
            "type": "default",\
            "sequence_number": "4",\
            "display_label": "Open Tasks",\
            "customize_sort": true,\
            "customize_fields": true,\
            "api_name": "Tasks",\
            "customize_display_label": false,\
            "name": "Tasks",\
            "action": null,\
            "href": "Leads/{ENTITYID}/Tasks",\
            "id": "2276164000000371748",\
            "status": "visible"\
        },\
        .\
        .\
        .\
    ]
}
```

Show full

Show less

**Note**

- Two new related lists **Chronological\_View** and **Chronological\_View\_History** are introduced in v5. You can get the details of open Calls, Tasks and Meetings in Chronological\_View related list and closed Calls, Tasks and Meetings in Chronological\_View\_History. Type key of these related list will be **grouped**

#### Sample Response while fetching the chronological view of a related list

``` json
Copied{
  "related_lists": [\
    {\
      "module": null,\
      "parent_related_lists": [\
        {\
          "api_name": "Calls",\
          "id": "2022124000000371752"\
        },\
        {\
          "api_name": "Events",\
          "id": "2022124000000371750"\
        },\
        {\
          "api_name": "Tasks",\
          "id": "2022124000000371748"\
        }\
      ],\
      "personality_name": "CHRONOLOGICALVIEWPERSONALITY",\
      "sort_by": null,\
      "type": "grouped",\
      "sequence_number": "4",\
      "display_label": "OpenActivities",\
      "customize_sort": true,\
      "customize_fields": true,\
      "api_name": "Activities_Chronological_View",\
      "customize_display_label": true,\
      "name": "Activities_Chronological_View",\
      "action": null,\
      "id": "2022124000000542018",\
      "href": null,\
      "fields": [\
        {\
          "api_name": "!Calls.Subject",\
          "id": "2022124000000017019"\
        },\
        {\
          "api_name": "!Calls.Call_Start_Time",\
          "id": "2022124000000017029"\
        },\
        {\
          "api_name": "!Calls.Owner",\
          "id": "2022124000000017017"\
        },\
        {\
          "api_name": "!Calls.Call_Purpose",\
          "id": "2022124000000017023"\
        },\
        {\
          "api_name": "!Calls.Call_Agenda",\
          "id": "2022124000000455890"\
        },\
        {\
          "api_name": "!Events.Event_Title",\
          "id": "2022124000000000249"\
        },\
        {\
          "api_name": "!Events.Start_DateTime",\
          "id": "2022124000000101001"\
        },\
        {\
          "api_name": "!Events.End_DateTime",\
          "id": "2022124000000101003"\
        },\
        {\
          "api_name": "!Events.All_day",\
          "id": "2022124000000057003"\
        },\
        {\
          "api_name": "!Events.Owner",\
          "id": "2022124000000000247"\
        },\
        {\
          "api_name": "!Tasks.Subject",\
          "id": "2022124000000000221"\
        },\
        {\
          "api_name": "!Tasks.Due_Date",\
          "id": "2022124000000000223"\
        },\
        {\
          "api_name": "!Tasks.Owner",\
          "id": "2022124000000000219"\
        },\
        {\
          "api_name": "!Tasks.Status",\
          "id": "2022124000000000229"\
        },\
        {\
          "api_name": "!Tasks.Priority",\
          "id": "2022124000000000231"\
        }\
      ],\
      "sort_order": null\
    }\
  ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/related-list-meta.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)