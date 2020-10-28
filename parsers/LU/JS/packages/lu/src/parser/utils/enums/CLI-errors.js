/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = {
    errorCode: {
        SUCCESS:                    0,
        UNKNOWN_OPTIONS:            1,  
        INVALID_INTENT:             2,  
        INVALID_LINE:               3,  
        OUTPUT_FOLDER_INVALID:      4,
        OUTPUT_FILE_EXISTS:         5,
        FILE_OPEN_ERROR:            6,
        INVALID_INPUT_FILE:         7,
        NO_LU_FILES_FOUND:          8,
        UNABLE_TO_WRITE_FILE:       9,
        DUPLICATE_ENTITIES:         10,
        INVALID_INPUT:              11,
        INVALID_URL_REF:            12,
        INVALID_LU_FILE_REF:        13,
        INVALID_QNA_FILTER_DEF:     14,
        INVALID_QNA_QUESTION_DEF:   15,
        INVALID_UTTERANCE_DEF:      16,
        MISSING_LABELLED_VALUE:     17,
        SYNONYMS_NOT_A_LIST:        18,
        PHRASELIST_NOT_A_LIST:      19,
        TRANSLATE_SERVICE_FAIL:     20,
        INVALID_URI:                21,
        INVALID_REGEX_ENTITY:       22,
        INVALID_COMPOSITE_ENTITY:   23,
        LUIS_API_CALL_FAILED:       24,
        UNKNOWN_ERROR:              99,
        BOUNDARY_INTENTS:           501,
        BOUNDARY_PATTERNANYENTITY:  502,
        BOUNDARY_UTTERANCES:        503,
        BOUNDARY_UTTERANCE_CHAR_LENGTH: 504,
        BOUNDARY_PATTERNS:          505,
        BOUNDARY_PATTERN_CHAR_LIMIT:506,
        BOUNDARY_REGEX_ENTITY:      507,
        BOUNDARY_REGEX_CHAR_LIMIT:  508,
        BOUNDARY_LIST_PARENT_LIMIT: 509,
        BOUNDARY_SYNONYMS_LENGTH:   510,
        BOUNDARY_PHRASE_LIST_LIMIT: 511,
        BOUNDARY_TOTAL_PHRASES:     512,
        BOUNDARY_INTC_PHRASES_LIMIT:513,
        BOUNDARY_NINTC_PHRASES_LIMIT:514,
        BOUNDARY_ROLES_PER_ENTITY:  515,
        BOUNDARY_TOTAL_ROLES:       516,
        BOUNDARY_FEATURE_PER_MODEL: 517,
        BOUNDARY_PARENT_ENTITY_LIMIT:518,
        BOUNDARY_TOTAL_ENTITIES_AND_ROLES:519,
        BOUNDARY_TOTAL_CLOSED_LISTS:520
    },
    boundaryLimits: {
        MAX_NUM_INTENTS:                    500,
        MAX_NUM_UTTERANCES:                 15000,
        MAX_NUM_PATTERNANY_ENTITIES:        100,
        MAX_CHAR_IN_UTTERANCE:              500,
        MAX_NUM_PATTERNS:                   500,
        MAX_CHAR_IN_PATTERNS:               400,
        MAX_NUM_REGEX_ENTITIES:             20,
        MAX_CHAR_REGEX_ENTITY_PATTERN:      500,
        MAX_LIST_ENTITY_CANONICAL_FORM:     50,
        MAX_LIST_ENTITY_SYNONYMS:           20000,
        MAX_NUM_PHRASE_LISTS:               500,
        MAX_NUM_PHRASES_IN_ALL_PHRASE_LIST: 500000,
        MAX_INTERCHANGEABLE_PHRASES:        50000,
        MAX_NON_INTERCHANGEABLE_PHRASES:    5000,
        MAX_ROLES_PER_ENTITY:               10,
        MAX_NUM_ROLES:                      300,
        MAX_NUM_DESCRIPTORS_PER_MODEL:      10,
        MAX_NUM_PARENT_ENTITIES:            100,
        MAX_TOTAL_ENTITES_AND_ROLES:        330,
        MAX_NUM_CLOSED_LISTS:               50
    }
};