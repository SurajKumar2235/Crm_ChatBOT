
# Get Signals

#### Purpose

To fetch all the signals in your CRM account.

#### Endpoints

[GET /settings/signals](https://www.zoho.com/crm/developer/docs/api/v7/get-signals.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/signals

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.signals.ALL

(OR)

scope=ZohoCRM.settings.signals.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/signals"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X GET
```

#### Response JSON Keys

- display\_labelstring



The display label of the corresponding signal.

- extensionJSON object



The details of the extension that the signal is raised from. This can be Email and related insights or any of the integrations you have enabled.

- feature\_availabilityJSON object



Represents whether the event is available for scoring rules or signals.

- namespacestring



Represents the unique identifier of the corresponding signal.

- chat\_enabledboolean



Represents whether the signal can be raised through chat.

- enabledboolean



Represents whether the signal is visible to the user in the UI while creating a scoring rule.

- idstring



Represents the unique id of the corresponding signal.

- negative\_signalboolean



Represents that the event is an unfavorable one. Email bounces, campaign bounces etc are called negative events, and may carry negative scores in a scoring rule.

- filtersJSON array



Available for Desk integration. This array gives the details of the signal such as the feature availability, various notification channels, ID, and display name.


#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "signals": [\
        {\
            "display_label": "Incoming",\
            "extension": {\
                "display_label": "Email",\
                "namespace": "Email",\
                "id": "3652397000000112001",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Email_Incoming__s",\
            "chat_enabled": false,\
            "id": "3652397000000112019",\
            "enabled": true\
        },\
        {\
            "display_label": "Competitor Alert",\
            "extension": {\
                "display_label": "Email",\
                "namespace": "Email",\
                "id": "3652397000000112001",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Email_Incoming_Competitors__s",\
            "chat_enabled": false,\
            "id": "3652397000004458132",\
            "enabled": true\
        },\
        {\
            "display_label": "Open",\
            "extension": {\
                "display_label": "Email Insights",\
                "namespace": "EmailInsight",\
                "id": "3652397000000112003",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "EmailInsight_Open__s",\
            "chat_enabled": false,\
            "id": "3652397000000112021",\
            "enabled": true\
        },\
        {\
            "display_label": "Click",\
            "extension": {\
                "display_label": "Email Insights",\
                "namespace": "EmailInsight",\
                "id": "3652397000000112003",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "EmailInsight_Click__s",\
            "chat_enabled": false,\
            "id": "3652397000000112023",\
            "enabled": true\
        },\
        {\
            "display_label": "Bounce",\
            "extension": {\
                "display_label": "Email Insights",\
                "namespace": "EmailInsight",\
                "id": "3652397000000112003",\
                "type": 2\
            },\
            "negative_signal": true,\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "EmailInsight_Bounce__s",\
            "chat_enabled": false,\
            "id": "3652397000000112025",\
            "enabled": true\
        },\
        {\
            "display_label": "Missed",\
            "extension": {\
                "display_label": "Call",\
                "namespace": "Telephony",\
                "id": "3652397000000112005",\
                "type": 2\
            },\
            "negative_signal": true,\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Telephony_Missed__s",\
            "chat_enabled": false,\
            "id": "3652397000000112027",\
            "enabled": false\
        },\
        {\
            "display_label": "Not Picked",\
            "extension": {\
                "display_label": "Call",\
                "namespace": "Telephony",\
                "id": "3652397000000112005",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Telephony_NotPicked__s",\
            "chat_enabled": false,\
            "id": "3652397000000117001",\
            "enabled": false\
        },\
        {\
            "display_label": "Responded",\
            "extension": {\
                "display_label": "Survey",\
                "namespace": "Survey",\
                "id": "3652397000000112007",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Survey_Responded__s",\
            "chat_enabled": false,\
            "id": "3652397000000112029",\
            "enabled": true\
        },\
        {\
            "display_label": "Visited",\
            "extension": {\
                "display_label": "Survey",\
                "namespace": "Survey",\
                "id": "3652397000000112007",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Survey_Visited__s",\
            "chat_enabled": false,\
            "id": "3652397000000815015",\
            "enabled": true\
        },\
        {\
            "display_label": "Open",\
            "extension": {\
                "display_label": "Campaigns",\
                "namespace": "Campaign",\
                "id": "3652397000000112009",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Campaign_Open__s",\
            "chat_enabled": false,\
            "id": "3652397000000112031",\
            "enabled": true\
        },\
        {\
            "display_label": "Click",\
            "extension": {\
                "display_label": "Campaigns",\
                "namespace": "Campaign",\
                "id": "3652397000000112009",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Campaign_Click__s",\
            "chat_enabled": false,\
            "id": "3652397000000112033",\
            "enabled": true\
        },\
        {\
            "display_label": "Hard Bounce",\
            "extension": {\
                "display_label": "Campaigns",\
                "namespace": "Campaign",\
                "id": "3652397000000112009",\
                "type": 2\
            },\
            "negative_signal": true,\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Campaign_Bounce__s",\
            "chat_enabled": false,\
            "id": "3652397000000112035",\
            "enabled": true\
        },\
        {\
            "display_label": "Soft Bounce",\
            "extension": {\
                "display_label": "Campaigns",\
                "namespace": "Campaign",\
                "id": "3652397000000112009",\
                "type": 2\
            },\
            "negative_signal": true,\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Campaign_Soft_Bounce__s",\
            "chat_enabled": false,\
            "id": "3652397000005653005",\
            "enabled": true\
        },\
        {\
            "display_label": "Missed Chat",\
            "extension": {\
                "display_label": "SalesIQ",\
                "namespace": "Livedesk",\
                "id": "3652397000000112011",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Livedesk_MissedChat__s",\
            "chat_enabled": false,\
            "id": "3652397000000112037",\
            "enabled": true\
        },\
        {\
            "display_label": "New Ticket",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewTicket__s",\
            "chat_enabled": false,\
            "id": "3652397000000112039",\
            "filters": [\
                {\
                    "display_label": "Leads",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewTicket_Lead__s",\
                    "id": "3652397000000112065",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Contacts",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewTicket_Contact__s",\
                    "id": "3652397000000112067",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Potential Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewTicket_Potential__s",\
                    "id": "3652397000000112069",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewTicket_Customer__s",\
                    "id": "3652397000000112071",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                }\
            ],\
            "enabled": true\
        },\
        {\
            "display_label": "New Comment",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment__s",\
            "chat_enabled": false,\
            "id": "3652397000000112041",\
            "filters": [\
                {\
                    "display_label": "Leads",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewComment_Lead__s",\
                    "id": "3652397000000112073",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Contacts",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewComment_Contact__s",\
                    "id": "3652397000000112075",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Potential Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewComment_Potential__s",\
                    "id": "3652397000000112077",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewComment_Customer__s",\
                    "id": "3652397000000112079",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                }\
            ],\
            "enabled": true\
        },\
        {\
            "display_label": "New Response",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewResponse__s",\
            "chat_enabled": false,\
            "id": "3652397000000112043",\
            "filters": [\
                {\
                    "display_label": "Leads",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewResponse_Lead__s",\
                    "id": "3652397000000112081",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Contacts",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewResponse_Contact__s",\
                    "id": "3652397000000112083",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Potential Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewResponse_Potential__s",\
                    "id": "3652397000000112085",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                },\
                {\
                    "display_label": "Customer",\
                    "feature_availability": {\
                        "scoring": false,\
                        "signals": true\
                    },\
                    "name": "Support_NewResponse_Customer__s",\
                    "id": "3652397000000112087",\
                    "type": 1,\
                    "notify_via": [\
                        {\
                            "enable": false,\
                            "type": "crm"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cliq"\
                        },\
                        {\
                            "enable": false,\
                            "type": "slack"\
                        },\
                        {\
                            "enable": false,\
                            "type": "cisco"\
                        }\
                    ]\
                }\
            ],\
            "enabled": true\
        },\
        {\
            "display_label": "Ticket Overdue",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_TicketOverdue__s",\
            "chat_enabled": false,\
            "id": "3652397000000112045",\
            "enabled": true\
        },\
        {\
            "display_label": "Ticket Escalated",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_TicketEscalated__s",\
            "chat_enabled": false,\
            "id": "3652397000000112047",\
            "enabled": true\
        },\
        {\
            "display_label": "New Rating",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewRating__s",\
            "chat_enabled": false,\
            "id": "3652397000000112049",\
            "enabled": true\
        },\
        {\
            "display_label": "Leads",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewTicket_Lead__s",\
            "chat_enabled": false,\
            "id": "3652397000000112065",\
            "enabled": false\
        },\
        {\
            "display_label": "Contacts",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewTicket_Contact__s",\
            "chat_enabled": false,\
            "id": "3652397000000112067",\
            "enabled": false\
        },\
        {\
            "display_label": "Potential Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewTicket_Potential__s",\
            "chat_enabled": false,\
            "id": "3652397000000112069",\
            "enabled": false\
        },\
        {\
            "display_label": "Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewTicket_Customer__s",\
            "chat_enabled": false,\
            "id": "3652397000000112071",\
            "enabled": false\
        },\
        {\
            "display_label": "Leads",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_Lead__s",\
            "chat_enabled": false,\
            "id": "3652397000000112073",\
            "enabled": false\
        },\
        {\
            "display_label": "Contacts",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_Contact__s",\
            "chat_enabled": false,\
            "id": "3652397000000112075",\
            "enabled": false\
        },\
        {\
            "display_label": "Potential Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_Potential__s",\
            "chat_enabled": false,\
            "id": "3652397000000112077",\
            "enabled": false\
        },\
        {\
            "display_label": "Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_Customer__s",\
            "chat_enabled": false,\
            "id": "3652397000000112079",\
            "enabled": false\
        },\
        {\
            "display_label": "Leads",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewResponse_Lead__s",\
            "chat_enabled": false,\
            "id": "3652397000000112081",\
            "enabled": false\
        },\
        {\
            "display_label": "Contacts",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewResponse_Contact__s",\
            "chat_enabled": false,\
            "id": "3652397000000112083",\
            "enabled": false\
        },\
        {\
            "display_label": "Potential Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewResponse_Potential__s",\
            "chat_enabled": false,\
            "id": "3652397000000112085",\
            "enabled": false\
        },\
        {\
            "display_label": "Customer",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewResponse_Customer__s",\
            "chat_enabled": false,\
            "id": "3652397000000112087",\
            "enabled": false\
        },\
        {\
            "display_label": "zoho.support.ticket.status.change",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_TicketStatusChange__s",\
            "chat_enabled": false,\
            "id": "3652397000000117003",\
            "enabled": false\
        },\
        {\
            "display_label": "zoho.support.ticket.priority.change",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_TicketPriorityChange__s",\
            "chat_enabled": false,\
            "id": "3652397000000117005",\
            "enabled": false\
        },\
        {\
            "display_label": "zoho.support.newcomment.supportrep",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_SupportRep__s",\
            "chat_enabled": false,\
            "id": "3652397000000117007",\
            "enabled": false\
        },\
        {\
            "display_label": "Mention",\
            "extension": {\
                "display_label": "Desk",\
                "namespace": "Support",\
                "id": "3652397000000112013",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Support_NewComment_Mention__s",\
            "chat_enabled": false,\
            "id": "3652397000000268005",\
            "enabled": true\
        },\
        {\
            "display_label": "Post",\
            "extension": {\
                "display_label": "Facebook",\
                "namespace": "Facebook",\
                "id": "3652397000000112015",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Facebook_NewPost__s",\
            "chat_enabled": false,\
            "id": "3652397000000112051",\
            "enabled": true\
        },\
        {\
            "display_label": "Comment",\
            "extension": {\
                "display_label": "Facebook",\
                "namespace": "Facebook",\
                "id": "3652397000000112015",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Facebook_NewComment__s",\
            "chat_enabled": false,\
            "id": "3652397000000112053",\
            "enabled": true\
        },\
        {\
            "display_label": "Like",\
            "extension": {\
                "display_label": "Facebook",\
                "namespace": "Facebook",\
                "id": "3652397000000112015",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Facebook_NewLike__s",\
            "chat_enabled": false,\
            "id": "3652397000000112055",\
            "enabled": true\
        },\
        {\
            "display_label": "Direct Message",\
            "extension": {\
                "display_label": "Facebook",\
                "namespace": "Facebook",\
                "id": "3652397000000112015",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Facebook_Message__s",\
            "chat_enabled": false,\
            "id": "3652397000000112057",\
            "enabled": true\
        },\
        {\
            "display_label": "Mention",\
            "extension": {\
                "display_label": "Twitter",\
                "namespace": "Twitter",\
                "id": "3652397000000112017",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Twitter_Mention__s",\
            "chat_enabled": false,\
            "id": "3652397000000112059",\
            "enabled": true\
        },\
        {\
            "display_label": "Reply",\
            "extension": {\
                "display_label": "Twitter",\
                "namespace": "Twitter",\
                "id": "3652397000000112017",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Twitter_Reply__s",\
            "chat_enabled": false,\
            "id": "3652397000000112061",\
            "enabled": true\
        },\
        {\
            "display_label": "Direct Message",\
            "extension": {\
                "display_label": "Twitter",\
                "namespace": "Twitter",\
                "id": "3652397000000112017",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Twitter_Message__s",\
            "chat_enabled": false,\
            "id": "3652397000000112063",\
            "enabled": true\
        },\
        {\
            "display_label": "Ticket Purchased",\
            "extension": {\
                "display_label": "Backstage",\
                "namespace": "Backstage",\
                "id": "3652397000000815001",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Backstage_Purchased__s",\
            "chat_enabled": false,\
            "id": "3652397000000815005",\
            "enabled": true\
        },\
        {\
            "display_label": "Checked in",\
            "extension": {\
                "display_label": "Backstage",\
                "namespace": "Backstage",\
                "id": "3652397000000815001",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Backstage_Checkedin__s",\
            "chat_enabled": false,\
            "id": "3652397000000815007",\
            "enabled": true\
        },\
        {\
            "display_label": "Ticket Cancelled",\
            "extension": {\
                "display_label": "Backstage",\
                "namespace": "Backstage",\
                "id": "3652397000000815001",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Backstage_Cancelled__s",\
            "chat_enabled": false,\
            "id": "3652397000000815009",\
            "enabled": true\
        },\
        {\
            "display_label": "Registered",\
            "extension": {\
                "display_label": "Webinar",\
                "namespace": "Webinar",\
                "id": "3652397000000815003",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Webinar_Registered__s",\
            "chat_enabled": false,\
            "id": "3652397000000815011",\
            "enabled": true\
        },\
        {\
            "display_label": "Attended",\
            "extension": {\
                "display_label": "Webinar",\
                "namespace": "Webinar",\
                "id": "3652397000000815003",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "Webinar_Attended__s",\
            "chat_enabled": false,\
            "id": "3652397000000815013",\
            "enabled": false\
        },\
        {\
            "display_label": "TestSignal",\
            "extension": {\
                "display_label": "Mailchimp",\
                "namespace": "mailchimp",\
                "id": "3652397000001632006",\
                "type": 4\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "function": {\
                "name": "Responded",\
                "id": "300102000000062001"\
            },\
            "namespace": "mailchimp.testsignal",\
            "chat_enabled": false,\
            "id": "3652397000001632008",\
            "enabled": true\
        },\
        {\
            "display_label": "mailchimp0.subscribed",\
            "extension": {\
                "display_label": "Mailchimp",\
                "namespace": "zohoplugin.mailchimp0",\
                "id": "3652397000001634003",\
                "type": 1\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "mailchimp0.subscribed",\
            "chat_enabled": false,\
            "id": "3652397000001635166",\
            "enabled": true\
        },\
        {\
            "display_label": "mailchimp0.unsubscribed",\
            "extension": {\
                "display_label": "Mailchimp",\
                "namespace": "zohoplugin.mailchimp0",\
                "id": "3652397000001634003",\
                "type": 1\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "mailchimp0.unsubscribed",\
            "chat_enabled": false,\
            "id": "3652397000001635170",\
            "enabled": true\
        },\
        {\
            "display_label": "mailchimp0.profileupdated",\
            "extension": {\
                "display_label": "Mailchimp",\
                "namespace": "zohoplugin.mailchimp0",\
                "id": "3652397000001634003",\
                "type": 1\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "mailchimp0.profileupdated",\
            "chat_enabled": false,\
            "id": "3652397000001635174",\
            "enabled": true\
        },\
        {\
            "display_label": "Desk to CRM",\
            "extension": {\
                "display_label": "Zoho Desk",\
                "namespace": "zohodesk",\
                "id": "3652397000002185017",\
                "type": 4\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "function": {\
                "name": "Raise Signal from Desk",\
                "id": "300102000000086001"\
            },\
            "namespace": "zohodesk_desktocrm",\
            "chat_enabled": false,\
            "id": "3652397000002223001",\
            "enabled": true\
        },\
        {\
            "display_label": "test signal",\
            "extension": {\
                "display_label": "Zoho Desk",\
                "namespace": "zohodesk",\
                "id": "3652397000002185017",\
                "type": 4\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "zohodesk_testsignal",\
            "chat_enabled": false,\
            "id": "3652397000002233001",\
            "enabled": true\
        },\
        {\
            "display_label": "test agile",\
            "extension": {\
                "display_label": "agile crm",\
                "namespace": "agilecrm",\
                "id": "3652397000002233003",\
                "type": 4\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "function": {\
                "name": "Responded",\
                "id": "300102000000062001"\
            },\
            "namespace": "agilecrm_testagile",\
            "chat_enabled": false,\
            "id": "3652397000002233005",\
            "enabled": true\
        },\
        {\
            "display_label": "pickyassistlive__pickyalert",\
            "extension": {\
                "display_label": "Picky Assist WhatsApp Integration",\
                "namespace": "tinujose.pickyassistlive",\
                "id": "3652397000005705003",\
                "type": 1\
            },\
            "feature_availability": {\
                "scoring": true,\
                "signals": true\
            },\
            "namespace": "pickyassistlive__pickyalert",\
            "chat_enabled": false,\
            "id": "3652397000005705071",\
            "enabled": true\
        },\
        {\
            "display_label": "Incoming Message",\
            "extension": {\
                "display_label": "Business Messages",\
                "namespace": "Message",\
                "id": "3652397000009080495",\
                "type": 2\
            },\
            "feature_availability": {\
                "scoring": false,\
                "signals": true\
            },\
            "namespace": "Message_NewMessage__s",\
            "chat_enabled": false,\
            "id": "3652397000009080497",\
            "enabled": false\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-signals.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)