[iframe](https://cdn.pagesense.io/stage-script/framePageNew-7c74117f6a_.html)

# Timeline of a Record

#### Purpose

To get the timeline of a record. The response gives you the history of the record including all the updates that were made to any of its fields and related records.

#### Endpoints

[GET /{module\_API\_name}/{record\_ID}/\_\_timeline](https://www.zoho.com/crm/developer/docs/api/v7/timeline-of-a-record.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_API\_name}/{record\_ID}/\_\_timeline

#### Supported Modules

Leads, Contacts, Accounts, Deals, Tasks, Meetings, Calls, Products, Services, Appointments, Purchase Orders, Sales Orders, Quotes, Invoices, Notes, Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.modules.{module\_name}.ALL

(or)

scope=ZohoCRM.modules.{module\_name}.READ

#### Parameters

- per\_pageinteger, optional



The number of records you want to fetch per page. You can use this parameter for the first page only. For the subsequent pages, you must use the "page\_token" parameter.

- page\_tokenstring, mandatory



Specify the "next\_page\_token" or the "previous\_page\_token" after you have paginated and retrieved 200 records. Note that you cannot give "per\_page" parameter if you give "page\_token" in the request.

- include\_timeline\_typestring, optional



To include extra types in the "timeline" object. You can get "signals" data through this to get signals-related timeline entries.

- includestring, mandatory when you specify "include\_timeline\_type" parameter



Use this parameter if you want to view the details of updates to the record through signals or any other means. The possible values are **extension** and **type**. For example, if the record was updated through a signal, then the response will have details of the extension as email insights, while the type of update will be signals.

- include\_inner\_detailsstring, optional



Use this parameter if you want to get extra details of the updates made to the record in the "field\_history" object of the response. The possible values are **field\_history.data\_type, field\_history.field\_label, field\_history.enable\_colour\_code, field\_history.pick\_list\_values, done\_by.type\_\_s, done\_by.profile**.



- **field\_history.data\_type** \- gives the details of the data type of the field that was updated.
- **field\_history.field\_label** \- gives the details of the field labels that were updated.
- **field\_history.pick\_list\_values** \- represents the list of values that are available for a picklist.
- **field\_history.enable\_colour\_code** \- represents whether color coding is enabled for that picklist value.
- **done\_by.profile** \- gives the details of the user's profile who updated the record.
- **done\_by.type\_\_s** \- gives the details of the type of user such as portal user or a regular user that modified the record.

- filtersJSON object **(encoded)**, optional



The **filters** parameter is used for filtering the response from the timeline API based on specific conditions. This parameter has three components, namely **field**, **comparator** and **value**, that form the conditions for filtering timeline data.



The possible value for the key **api\_name** for field are - **record.module.api\_name**, **source**, **audited\_time** and **done\_by.id**.



- **record.module.api\_name**: You can filter the timeline details of Notes, Attachments, Tasks, Calls, Events and Emails of your record using this parameter.

The allowed comparators are **equal**, **in**. The allowed values are **Notes**, **Attachments**, **Tasks**, **Calls**, **Events**, **Emails**.

For example,

For filtering Notes :

{"field":{"api\_name":"record.module.api\_name"},"comparator":"equal","value":"Notes"}

For filtering Notes and Tasks :

{"field":{"api\_name":"record.module.api\_name"},"comparator":"in","value":\["Notes","Tasks"\]}

- **done\_by.id**: You can filter the timeline details done by a particular user. The allowed comparators are **equal**, **in**. The allowed values are **user IDs**.

For example, to filter timeline details done by a particular user ID :

{"field":{"api\_name":"done\_by.id"},"comparator":"in","value":\["5843104000000424001"\]}

- **audited\_time**: You can filter timeline data based on its audited time. The allowed comparator is **between**. The allowed value is **time in ISO 8601 format.**. For example to filter time line details between two dates : {"field":{"api\_name":"audited\_time"},"comparator":"between","value":\["2023-10-25T00:00:00+12:00","2023-10-30T23:59:59+12:00"\]}
- **source**: You can filter time line data based on its source. The allowed comparators are **equal, in**. The allowed values include crm\_api, mass\_delete\_via\_crm\_api, bulkapi, approval\_process, assignment\_rules, blueprint, mass\_update\_via\_blueprint, orchestration, convert, massconvert, custom\_function, macro, crm\_ui, mass\_update, mass\_update\_via\_scheduler, mass\_delete\_via\_clean\_up, bulk\_action, change\_owner, mass\_change\_owner\_via\_scheduler, review\_process, scoringrule, wizard, workflow.

For example to filter timeline details based on source:

{"field":{"api\_name":"source"},"comparator":"equal","value":"crm\_ui"} {"field":{"api\_name":"source"},"comparator":"in","value":\["crm\_api",crm\_ui"\]}


You can combine multiple conditions using **group\_operator** and **group**.

{"group\_operator":"AND","group":\[{"field":{"api\_name":"record.module.api\_name"},"comparator":"in","value":\["Notes"\]},{"field":{"api\_name":"source"},"comparator":"in","value":\["crm\_ui","crm\_api"\]}\]}

You can also refer to the sample request for the structure. Note that you must encode the value of this parameter.

In the sample request, filters={"comparator":"between","field":{"api\_name":"audited\_time"},"value":\["2023-06-07T00:00:00+05:30","2023-06-07T12:59:59+05:30"\]} is encoded as filters=%7B%22comparator%22%3A%22between%22%2C%22field%22%3A%7B%22api\_name%22%3A%22audited\_time%22%7D%2C%22value%22%3A%5B%222023-06-07T00%3A00%3A00%2B05%3A30%22%2C%222023-06-07T12%3A59%3A59%2B05%3A30%22%5D%7D

You can use Encode URL/ Decode URL options in our [URL - Encoder/Decoder tool](https://www.zoho.com/toolkit/encode-decode.html) for encoding this value.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/554023000001122039/__timeline?sort_by=audited_time&include_inner_details=field_history.data_type, field_history.field_label, field_history.enable_colour_code, field_history.pick_list_values, done_by.type__s, done_by.profile&filters=%7B%22comparator%22%3A%22between%22%2C%22field%22%3A%7B%22api_name%22%3A%22audited_time%22%7D%2C%22value%22%3A%5B%222023-06-07T00%3A00%3A00%2B05%3A30%22%2C%222023-06-07T12%3A59%3A59%2B05%3A30%22%5D%7D"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- done\_by



The details of the user who modified the record such as the name, ID, name and ID of that user's profile, and the user type.

- related\_record



The name and ID of the parent record which the task, call, or meeting belongs to.

- automation\_details



Represents that the record was modified through an automation action such as a workflow.

- record



The name and ID of the task, call, or meeting that was created for the parent record.

- audited\_time



The date and time at which the update on the record happened.

- action



The action that happened on the record. Some of the possible values are "added", "updated", "owner\_assigned", "TaskAssigned", "RelListAssociation added".

- id



The unique ID of the action on the timeline.

- source



Represents from where the record was updated. The possible values include "crm\_ui", "migration", "mass\_update", "mass\_addition\_via\_ui", "crm\_api", "workflow", etc.

- field\_history



Contains the following details.



- **api\_name** \- the API name of the field that was modified. This will be available by default in the response.
- **\_value** \- the old and new values of the field. This will be available by default in the response.
- The following values are available in the response when you specify the include\_inner\_details parameter.
  - **enable\_colour\_code** \- represents whether color coding is enabled for the picklist field.
  - **data\_type** \- the data type of the field that was modified.
  - **pick\_list\_values** \- the details of the various values of the picklist.

#### Possible Errors

- NO\_CONTENTHTTP 204



Data unavailability or there is no timeline for the applied filter.

**Resolution:** Modify the filter values and try again.

- INVALID\_DATAHTTP 400



**Reasons**:



- You have used disallowed comparators in the "filters" parameter.
- You have not encoded the value of the filters parameter.
- the ID of the record is invalid in the request URL.

**Resolution:**

- Refer to the "filters" parameter in the "Parameters" section for the list of allowed comparators and the fields.
- specify a valid record ID. Refer to [Get Records API](https://www.zoho.com/crm/developer/docs/api/v7/get-records.html) to get the record ID.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You have specified both "per\_page" and "page\_token" parameters.

**Resolution:** You can only use the "page\_token" parameter for navigation.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the "Scopes" section, and try this API.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "__timeline": [\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T19:32:21-11:00",\
            "action": "tag_added",\
            "id": "554023000003097009",\
            "source": "mass_update",\
            "field_history": [\
                {\
                    "api_name": "Tag",\
                    "field_label": "Tag",\
                    "enable_colour_code": false,\
                    "data_type": "text",\
                    "_value": {\
                        "new": "Prime",\
                        "old": "blank"\
                    },\
                    "id": "554023000000138025",\
                    "pick_list_values": []\
                }\
            ]\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T18:58:36-11:00",\
            "action": "updated",\
            "id": "554023000003097006",\
            "source": "crm_ui",\
            "field_history": [\
                {\
                    "api_name": "Phone",\
                    "field_label": "Phone",\
                    "enable_colour_code": false,\
                    "data_type": "phone",\
                    "_value": {\
                        "new": "1234567",\
                        "old": null\
                    },\
                    "id": "554023000000000565",\
                    "pick_list_values": []\
                }\
            ]\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T18:17:54-11:00",\
            "action": "updated",\
            "id": "554023000003095054",\
            "source": "crm_ui",\
            "field_history": [\
                {\
                    "api_name": "Last_Name",\
                    "field_label": "Last Name",\
                    "enable_colour_code": false,\
                    "data_type": "text",\
                    "_value": {\
                        "new": "Boyle",\
                        "old": "Smith"\
                    },\
                    "id": "554023000000000559",\
                    "pick_list_values": []\
                },\
                {\
                    "api_name": "First_Name",\
                    "field_label": "First Name",\
                    "enable_colour_code": false,\
                    "data_type": "text",\
                    "_value": {\
                        "new": "Patricia",\
                        "old": null\
                    },\
                    "id": "554023000000000557",\
                    "pick_list_values": []\
                },\
                {\
                    "api_name": "Full_Name",\
                    "field_label": "Full Name",\
                    "enable_colour_code": false,\
                    "data_type": "text",\
                    "_value": {\
                        "new": "Patricia Boyle",\
                        "old": "Smith"\
                    },\
                    "id": "554023000000000597",\
                    "pick_list_values": []\
                }\
            ]\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": " Smith",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T18:17:19-11:00",\
            "action": "updated",\
            "id": "554023000003095048",\
            "source": "crm_ui",\
            "field_history": [\
                {\
                    "api_name": "Company",\
                    "field_label": "Company",\
                    "enable_colour_code": false,\
                    "data_type": "text",\
                    "_value": {\
                        "new": "ABC",\
                        "old": "Zylker"\
                    },\
                    "id": "554023000000000555",\
                    "pick_list_values": []\
                }\
            ]\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": " Smith",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T18:12:11-11:00",\
            "action": "updated",\
            "id": "554023000003095038",\
            "source": "crm_api",\
            "field_history": [\
                {\
                    "api_name": "Lead_Source",\
                    "field_label": "Lead Source",\
                    "enable_colour_code": false,\
                    "data_type": "picklist",\
                    "_value": {\
                        "new": "Cold Call",\
                        "old": "Employee Referral"\
                    },\
                    "id": "554023000000000573",\
                    "pick_list_values": [\
                        {\
                            "display_value": "-None-",\
                            "sequence_number": 1,\
                            "colour_code": null,\
                            "actual_value": "-None-",\
                            "id": "554023000000002313",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Advertisement",\
                            "sequence_number": 2,\
                            "colour_code": null,\
                            "actual_value": "Advertisement",\
                            "id": "554023000000002315",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Chat",\
                            "sequence_number": 28,\
                            "colour_code": null,\
                            "actual_value": "Chat",\
                            "id": "554023000000040001",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Cold Call",\
                            "sequence_number": 6,\
                            "colour_code": null,\
                            "actual_value": "Cold Call",\
                            "id": "554023000000002317",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Employee Referral",\
                            "sequence_number": 8,\
                            "colour_code": null,\
                            "actual_value": "Employee Referral",\
                            "id": "554023000000002319",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "External Referral",\
                            "sequence_number": 9,\
                            "colour_code": null,\
                            "actual_value": "External Referral",\
                            "id": "554023000000002321",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Facebook",\
                            "sequence_number": 15,\
                            "colour_code": null,\
                            "actual_value": "Facebook",\
                            "id": "554023000001157033",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Internal Seminar",\
                            "sequence_number": 22,\
                            "colour_code": null,\
                            "actual_value": "Seminar-Internal",\
                            "id": "554023000000172093",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Online Store",\
                            "sequence_number": 14,\
                            "colour_code": null,\
                            "actual_value": "OnlineStore",\
                            "id": "554023000000172095",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Partner",\
                            "sequence_number": 18,\
                            "colour_code": null,\
                            "actual_value": "Partner",\
                            "id": "554023000000002323",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Public Relations",\
                            "sequence_number": 19,\
                            "colour_code": null,\
                            "actual_value": "Public Relations",\
                            "id": "554023000000002325",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Sales Email Alias",\
                            "sequence_number": 20,\
                            "colour_code": null,\
                            "actual_value": "Sales Mail Alias",\
                            "id": "554023000000172089",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Seminar Partner",\
                            "sequence_number": 21,\
                            "colour_code": null,\
                            "actual_value": "Seminar Partner",\
                            "id": "554023000000172091",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Trade Show",\
                            "sequence_number": 25,\
                            "colour_code": null,\
                            "actual_value": "Trade Show",\
                            "id": "554023000000002327",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Twitter",\
                            "sequence_number": 16,\
                            "colour_code": null,\
                            "actual_value": "Twitter",\
                            "id": "554023000001157037",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Web Download",\
                            "sequence_number": 26,\
                            "colour_code": null,\
                            "actual_value": "Web Download",\
                            "id": "554023000000172085",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Web Research",\
                            "sequence_number": 27,\
                            "colour_code": null,\
                            "actual_value": "Web Research",\
                            "id": "554023000000172087",\
                            "type": "used"\
                        }\
                    ]\
                }\
            ]\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": "Smith",\
                "id": "554023000001122039"\
            },\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Tasks",\
                    "id": "554023000000000143"\
                },\
                "name": "test task",\
                "id": "554023000003095019"\
            },\
            "audited_time": "2023-06-07T18:10:47-11:00",\
            "action": "added",\
            "id": "554023000003095029",\
            "source": "crm_ui",\
            "field_history": null\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": "Smith",\
                "id": "554023000001122039"\
            },\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Notes",\
                    "id": "554023000000000147"\
                },\
                "name": "This is a test note",\
                "id": "554023000003096003"\
            },\
            "audited_time": "2023-06-07T18:10:29-11:00",\
            "action": "added",\
            "id": "554023000003096001",\
            "source": "crm_ui",\
            "field_history": null\
        },\
        {\
            "done_by": {\
                "profile": {\
                    "name": "Administrator",\
                    "id": "554023000000015972"\
                },\
                "name": "Patricia Boyle",\
                "id": "554023000000235011",\
                "type__s": "regular user"\
            },\
            "related_record": null,\
            "automation_details": null,\
            "record": {\
                "module": {\
                    "api_name": "Leads",\
                    "id": "554023000000000125"\
                },\
                "name": " Smith",\
                "id": "554023000001122039"\
            },\
            "audited_time": "2023-06-07T18:09:49-11:00",\
            "action": "updated",\
            "id": "554023000003095017",\
            "source": "crm_ui",\
            "field_history": [\
                {\
                    "api_name": "Lead_Source",\
                    "field_label": "Lead Source",\
                    "enable_colour_code": false,\
                    "data_type": "picklist",\
                    "_value": {\
                        "new": "Employee Referral",\
                        "old": null\
                    },\
                    "id": "554023000000000573",\
                    "pick_list_values": [\
                        {\
                            "display_value": "-None-",\
                            "sequence_number": 1,\
                            "colour_code": null,\
                            "actual_value": "-None-",\
                            "id": "554023000000002313",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Advertisement",\
                            "sequence_number": 2,\
                            "colour_code": null,\
                            "actual_value": "Advertisement",\
                            "id": "554023000000002315",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Chat",\
                            "sequence_number": 28,\
                            "colour_code": null,\
                            "actual_value": "Chat",\
                            "id": "554023000000040001",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Cold Call",\
                            "sequence_number": 6,\
                            "colour_code": null,\
                            "actual_value": "Cold Call",\
                            "id": "554023000000002317",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Employee Referral",\
                            "sequence_number": 8,\
                            "colour_code": null,\
                            "actual_value": "Employee Referral",\
                            "id": "554023000000002319",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "External Referral",\
                            "sequence_number": 9,\
                            "colour_code": null,\
                            "actual_value": "External Referral",\
                            "id": "554023000000002321",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Facebook",\
                            "sequence_number": 15,\
                            "colour_code": null,\
                            "actual_value": "Facebook",\
                            "id": "554023000001157033",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Internal Seminar",\
                            "sequence_number": 22,\
                            "colour_code": null,\
                            "actual_value": "Seminar-Internal",\
                            "id": "554023000000172093",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Online Store",\
                            "sequence_number": 14,\
                            "colour_code": null,\
                            "actual_value": "OnlineStore",\
                            "id": "554023000000172095",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Partner",\
                            "sequence_number": 18,\
                            "colour_code": null,\
                            "actual_value": "Partner",\
                            "id": "554023000000002323",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Public Relations",\
                            "sequence_number": 19,\
                            "colour_code": null,\
                            "actual_value": "Public Relations",\
                            "id": "554023000000002325",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Sales Email Alias",\
                            "sequence_number": 20,\
                            "colour_code": null,\
                            "actual_value": "Sales Mail Alias",\
                            "id": "554023000000172089",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Seminar Partner",\
                            "sequence_number": 21,\
                            "colour_code": null,\
                            "actual_value": "Seminar Partner",\
                            "id": "554023000000172091",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Trade Show",\
                            "sequence_number": 25,\
                            "colour_code": null,\
                            "actual_value": "Trade Show",\
                            "id": "554023000000002327",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Twitter",\
                            "sequence_number": 16,\
                            "colour_code": null,\
                            "actual_value": "Twitter",\
                            "id": "554023000001157037",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Web Download",\
                            "sequence_number": 26,\
                            "colour_code": null,\
                            "actual_value": "Web Download",\
                            "id": "554023000000172085",\
                            "type": "used"\
                        },\
                        {\
                            "display_value": "Web Research",\
                            "sequence_number": 27,\
                            "colour_code": null,\
                            "actual_value": "Web Research",\
                            "id": "554023000000172087",\
                            "type": "used"\
                        }\
                    ]\
                }\
            ]\
        }\
    ],
    "info": {
        "per_page": 200,
        "next_page_token": null,
        "count": 10,
        "page": 1,
        "previous_page_token": null,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/timeline-of-a-record.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)