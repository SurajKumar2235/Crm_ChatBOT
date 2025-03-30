
# Users APIs

In Zoho CRM, the user is the one who is allowed to access and manage the CRM records. These users can be defined under various profiles and categories such as Administrators, Standard, etc,.

Using the Users APIs, you can retrieve the basic information of your available CRM users. Use the type parameter to get the required list of users. For example, you can set the param type as **AdminUsers**, to get the list of CRM users with **Administrative profile**. The detailed explanation of the Users API and the examples are shown below:

### Get Users

#### Purpose

To retrieve the users' data specified in the API request. You can specify the type of users that needs to be retrieved using the Users API. For example, use type=AllUsers, to get the list of all the CRM users available.

#### Endpoints

[GET /users](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html)

[GET /users/{user\_id}](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html)

### Request Details

#### Request URL

**To get all users:**

{api-domain}/crm/{version}/users

**To get a specific user:**

{api-domain}/crm/{version}/users/{user\_id}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

If-Modified-Since: Use this header to get the list of recently modified users. Example: 2019-07-25T15:26:49+05:30

#### Scope

scope=ZohoCRM.users.{operation\_type}

#### Possible operation types

ALL - Full access to users

READ - Get user data

##### Parameters

- typestring, optional



Specify the type of the users you want to retrieve.



- **AllUsers** \- To list all users in your organization (both active and inactive users).
- **ActiveUsers** \- To get the list of all the Active Users.
- **DeactiveUsers** \- To get the list of all the users who were deactivated.
- **ConfirmedUsers** \- To get the list of all the confirmed users.
- **NotConfirmedUsers** \- To get the list of all the non-confirmed users.
- **DeletedUsers** \- To get the list of deleted users.
- **ActiveConfirmedUsers** \- To get the list of active users who are also confirmed.
- **AdminUsers** \- To get the list of admin users.
- **ActiveConfirmedAdmins** \- To get the list of active users with the administrative privileges and are also confirmed.
- **CurrentUser** \- To get the current CRM user.

- pageinteger



To get the list of user records from the respective pages. Default value is **1**.

- per\_pageinteger



To set the number of user records to be retrieved per page. The default and the maximum possible value is **200**.

- idsstring, optional



Represents the unique ID of the users. You can specify up to **100** user IDs.


**Note**

- The **page** and **per\_page** parameters are used to fetch user records according to their position in CRM. Let us assume that the user has to fetch 400 user records. The maximum number of user records that one can get for an API call is **200**. So, for the user records above the 200th position, they cannot be fetched. By using the **page** (1 and 2) and **per\_page** (200) parameter, the user can fetch all 400 user records using 2 API calls.

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/users?type=AllUsers"
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

- type\_\_sstring



Represents the type of the user.

**Possible values:** Regular User, Client Portal User, Sandbox Developer User, Team User, Support User.

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
            "country": "US",\
            "name_format__s": "Salutation,First Name,Last Name",\
            "language": "en_US",\
            "microsoft": false,\
            "$shift_effective_from": null,\
            "id": "5725767000000411001",\
            "state": "Karnataka",\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "zip": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-04-12T02:08:05-07:00",\
            "time_format": "hh:mm a",\
            "offset": -28800000,\
            "profile": {\
                "name": "Administrator",\
                "id": "5725767000000026011"\
            },\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": "808233918",\
            "full_name": "Patricia Boyle",\
            "phone": "123456789",\
            "dob": "1990-12-31",\
            "sort_order_preference__s": "First Name,Last Name",\
            "status": "active",\
            "type__s": "Regular User",\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "customize_info": {\
                "notes_desc": null,\
                "show_right_panel": null,\
                "bc_view": null,\
                "show_home": false,\
                "show_detail_view": true,\
                "show_left_panel": true,\
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
                "id": "5725767000000411001"\
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
            "first_name": "Patricia",\
            "email": "patricia.a+us@zohotest.com",\
            "status_reason__s": null,\
            "website": null,\
            "Modified_Time": "2024-12-31T01:59:14-08:00",\
            "$next_shift": null,\
            "mobile": null,\
            "last_name": "Boyle",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "confirm": true,\
            "date_format": "MMM d, yyyy"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Product Manager",\
                "id": "5725767000000448003"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000448028",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia",\
            "email": "patricia@zoohoo.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-04-19T00:33:19-07:00",\
            "website": null,\
            "Modified_Time": "2024-03-06T22:02:36-08:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "deleted",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000448041",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia",\
            "email": "ceo@zooho.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-04-19T00:34:14-07:00",\
            "website": null,\
            "Modified_Time": "2023-04-19T00:34:14-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Marketing",\
                "id": "5725767000000448013"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000583004",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "John",\
            "email": "john@mail.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-24T12:48:15-07:00",\
            "website": null,\
            "Modified_Time": "2024-06-26T23:28:57-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "John",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "disabled",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Sales Representative",\
                "id": "5725767000000448008"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000583018",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "Lee",\
            "email": "lee@mail.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-24T12:48:46-07:00",\
            "website": null,\
            "Modified_Time": "2023-05-24T12:48:46-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "Lee",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Sales Representative",\
                "id": "5725767000000448008"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000583032",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "Kim",\
            "email": "kim@gmail.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-24T12:49:06-07:00",\
            "website": null,\
            "Modified_Time": "2023-05-24T12:49:06-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "Kim",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000592002",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia123",\
            "email": "ceo@zho.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-26T01:40:23-07:00",\
            "website": null,\
            "Modified_Time": "2024-03-06T22:02:06-08:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia123 krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "disabled",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000592013",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia3",\
            "email": "ceo@zo.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-26T01:40:37-07:00",\
            "website": null,\
            "Modified_Time": "2023-05-26T01:40:37-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia3 krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000592024",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia3",\
            "email": "co@zo.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-26T01:40:45-07:00",\
            "website": null,\
            "Modified_Time": "2024-05-02T04:56:14-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia3 krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "deleted",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "CEO",\
                "id": "5725767000000026005"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000592035",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "patricia3",\
            "email": "co@zsso.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-26T01:40:54-07:00",\
            "website": null,\
            "Modified_Time": "2023-07-26T23:09:28-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": "krishnan",\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "patricia3 krishnan",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "disabled",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Product Manager",\
                "id": "5725767000000448003"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000622009",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "Oliver",\
            "email": "oliver@aaa.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-05-31T03:03:14-07:00",\
            "website": null,\
            "Modified_Time": "2023-05-31T03:03:14-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "Oliver",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Sales Representative",\
                "id": "5725767000000448008"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000000871014",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "Shane",\
            "email": "shane@mail.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2023-07-26T23:09:52-07:00",\
            "website": null,\
            "Modified_Time": "2023-07-26T23:09:52-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "Shane",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Manager 1",\
                "id": "5725767000000866037"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000002558004",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "sakthi",\
            "email": "patricia.a+share@zohotest.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2024-04-10T00:30:12-07:00",\
            "website": null,\
            "Modified_Time": "2024-04-10T00:30:12-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "sakthi",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Sales Representative",\
                "id": "5725767000000448008"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000002868025",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "Raana",\
            "email": "raana@mail.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2024-05-26T23:24:37-07:00",\
            "website": null,\
            "Modified_Time": "2024-05-26T23:24:37-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": -28800000,\
            "profile": {\
                "name": "Standard",\
                "id": "5725767000000026014"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "America/Los_Angeles",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": null,\
            "confirm": false,\
            "full_name": "Raana",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        },\
        {\
            "country": null,\
            "role": {\
                "name": "Manager 1",\
                "id": "5725767000000866037"\
            },\
            "city": null,\
            "language": "en_US",\
            "locale": "en_US",\
            "microsoft": false,\
            "Isonline": false,\
            "Modified_By": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "$shift_effective_from": null,\
            "street": null,\
            "$current_shift": null,\
            "alias": null,\
            "id": "5725767000003149014",\
            "state": null,\
            "fax": null,\
            "country_locale": "en_US",\
            "sandboxDeveloper": false,\
            "first_name": "COQL",\
            "email": "patricia.a+aa@zohotest.com",\
            "zip": null,\
            "status_reason__s": null,\
            "decimal_separator": "Period",\
            "created_time": "2024-06-26T23:29:53-07:00",\
            "website": null,\
            "Modified_Time": "2024-06-26T23:38:35-07:00",\
            "time_format": "hh:mm a",\
            "$next_shift": null,\
            "offset": 19800000,\
            "profile": {\
                "name": "asd",\
                "id": "5725767000000871001"\
            },\
            "mobile": null,\
            "last_name": null,\
            "time_zone": "Asia/Kolkata",\
            "number_separator": "Comma",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "5725767000000411001"\
            },\
            "zuid": "856446234",\
            "confirm": true,\
            "full_name": "COQL",\
            "phone": null,\
            "dob": null,\
            "date_format": "MMM d, yyyy",\
            "status": "active",\
            "type__s": "Regular User"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 15,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)