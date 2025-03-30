
# Retrieve User details Associated with a Territory

#### Purpose

To retrieve the details of the user added to the territory in your organization.

#### Endpoints

[GET/settings/territories/{territoryid}/users](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territory.html)

[GET settings/territories/{territoryid}/users/{userid}](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territory.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/{territoryid}/users/{userid}

or {api-domain}/crm/{version}/settings/territories/{territoryid}/users

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.users.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/431581000000744113/users"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- country, city, street, state, country\_locale, zipstring



Represents the address of the user.

- roleJSON object



Represents the name and ID of the role of the user.

- localestring



Represents the user's locale. For instance, 'en\_IN'.

- Modified\_ByJSON object



Represents the name and ID of the user who last modified the user's details.

- Currencystring



Represents the user's currency preference.

- aliasstring



Represents the alias name of the user.

- idstring



Represents the unique ID of the user.

- fax, email, mobile, phonestring



Represents the contact details of the user.

- first\_namestring



Represents the first name of the user.

- Reporting\_ToJSON object



Represents the name and ID of the user to whom the user reports to.

- created\_timestring



Represents the date and time at which the user was created.

- websitestring



Represents the user's website details.

- Modified\_Timestring



Represents the date and time at which the user's details were last modified.

- profileJSON object



Represents the name and ID of the profile of the user.

- last\_namestring



Represents the last name of the user.

- time\_zonestring



Represents the current user's timezone.

- created\_byJSON object



Represents the name and ID of the user who created the user.

- zuidstring



Represents the ZUID of the current user.

- confirmboolean



Represents if the user is a confirmed user.

**true:** The user is a confirmed user.

**false:** The user is not a confirmed user.

- full\_namestring



Represents the full name of the user in the format specified in "name\_format" key.

- dobstring



Represents the date of birth of the user.

- date\_formatstring



Represents the date format. For instance, 'MM/dd/yyyy'.

- time\_formatstring



Represents the time format. For instance, 'hh:mm a'.

- statusstring



Represents the status of the user.

**active:** The user is active.

**inactive:** The user is inactive.

- signaturestring



Represents the user's signature.

- name\_format\_\_sstring



Represents the format of the full\_name of the user. For instance, 'Salutation,First Name,Last Name'.

- sort\_order\_preference\_\_sstring



Represents how the records in the response are sorted based on either the last name or first name. The default sorting happens by the record IDs.

- languagestring



Represents the language in which the user accesses the CRM. For instance, 'en\_US'.

- microsoftboolean



Represents if the user is a microsoft user.

**true:** The user is a microsoft user.

**false:** The user is a microsoft user.

- personal\_accountboolean



Represents if the user is the only user in the organization.

**true:** The user is the only user in the organization.

**false:** The user is not the only user in the organization.

- Isonlineboolean



Represents if the user is online.

**true:** The user is online.

**false:** The user is offline.

- themeinteger



Represents the details of the theme selected by the user.

- Number\_Separatorstring



Represents the format of the number fields. The possible values are "comma", "period" and "space".

- Decimal\_Separatorstring



Represents the format of the decimal fields. The possible values are "comma" and "period".


#### Sample Response

``` json
Copied{
    "users": [\
        {\
            "country": "IN",\
            "name_format__s": "Salutation,First Name,Last Name",\
            "language": "en_US",\
            "microsoft": false,\
            "$shift_effective_from": null,\
            "id": "431581000000258001",\
            "state": "Karnataka",\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "zip": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-02-01T10:09:10+05:30",\
            "time_format": "hh:mm a",\
            "offset": 19800000,\
            "profile": {\
                "name": "Administrator",\
                "id": "431581000000031157"\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "zuid": "60019394663",\
            "full_name": "Patricia Boyle",\
            "phone": null,\
            "dob": null,\
            "sort_order_preference__s": "First Name,Last Name",\
            "status": "active",\
            "role": {\
                "name": "CEO",\
                "id": "431581000000031151"\
            },\
            "customize_info": {\
                "notes_desc": null,\
                "show_right_panel": null,\
                "bc_view": null,\
                "show_home": false,\
                "show_detail_view": true,\
                "unpin_recent_item": null\
            },\
            "city": null,\
            "signature": null,\
            "locale": "en_US",\
            "personal_account": false,\
            "Isonline": true,\
            "default_tab_group": "0",\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "theme": {\
                "normal_tab": {\
                    "font_color": "#FFFFFF",\
                    "background": "#222222"\
                },\
                "selected_tab": {\
                    "font_color": "#FFFFFF",\
                    "background": "#222222"\
                },\
                "new_background": null,\
                "background": "#F3F0EB",\
                "screen": "fixed",\
                "type": "default"\
            },\
            "first_name": "Patricia Boyle",\
            "email": "patricia@zohotest.com",\
            "status_reason__s": null,\
            "Modified_Time": "2023-05-24T17:37:14+05:30",\
            "website": null,\
            "$next_shift": null,\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "Asia/Kolkata",\
            "number_separator": "Comma",\
            "confirm": true,\
            "date_format": "dd/MM/yyyy",\
            "category": "regular_user"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Manager",\
                "id": "431581000000031154"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "431581000000278001",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "J Smith",\
            "email": "jsmith@zohotest.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-02-03T10:05:00+05:30",\
            "Modified_Time": "2023-05-24T17:37:26+05:30",\
            "website": null,\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": 19800000,\
            "profile": {\
                "name": "Standard",\
                "id": "431581000000031160"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "Asia/Kolkata",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "431581000000258001"\
            },\
            "zuid": "60019445391",\
            "confirm": true,\
            "full_name": "J Smith",\
            "phone": null,\
            "dob": null,\
            "sort_order_preference__s": "null",\
            "date_format": "MMM d, yyyy",\
            "category": "regular_user",\
            "status": "active"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}

```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-user-territory.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)