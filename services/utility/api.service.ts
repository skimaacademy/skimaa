import axios, { HttpStatusCode } from 'axios';
import { CookieStorageService } from './storage.service';
import { useRouter } from 'next/router';
import { ApiBaseUrl, ApiMaxTimeOut } from '@/constants/url.constant';
import { ClientRoutes } from './router.service';

export interface ApiRoutes {
  Auth: { 
    SignIn: string;
  }
  User: {
    Profile: string;
    Cache: string;
    Update: string;
  }
  Salesman: {
    getById: string;
    getAll: string;
    getAllWithPagination: string;
    create: string;
    update: string;
    deleteById: string;
    patchById: string;
    addCustomMapLayer: string;
    getCustomMapLayers: string;
  },
  Team: {
    getAllByUser: string;
    create: string;
  },
  MlEngine: {
    district: {
      getDistrictMapData: string;
      getAllDistrictMapDataList: string;
    },
    pharmacy: {
      getPharmacyFileData: string;
      getPharmacyDataList: string;
      pharmacyDataUpload: string;
      pharmacyDataDelete: string;
      uploadRunPharmacyData: string;
    },
    territory: {
      runTerritory: string;
      fileUploadAndRunTerritory: string;
      getTerritoryData: string;
      getAllTerritoryDataList: string;
      versionUpdate: string;
      deleteRunData: string;
      deleteVersionData: string;
    },
    analytics: {
      getAnalyticsData: string;
      getAllAnalyticsDataList: string;
    }
  },
  s3: {
    download: string;
    modify: string;
  },
  Utility:{
    getDistinctColors: string;
    getDistrictsGeoJsonData: string;
  },
  Notification: {
    get: string;
    getAll: string;
    create: string;
    update: string;
  }
}

export const ApiRoutes: ApiRoutes = {
  Auth: {
    SignIn: '/auth/admin-sign-in'
  },
  User: {
    Profile: '/user/profile',
    Cache: '/user/cache',
    Update: '/user/update',
  },
  Salesman: {
    getById: '/salesman/get',
    getAll: '/salesman/get-all',
    getAllWithPagination: '/salesman/get-all-with-pagination',
    create: '/salesman/create',
    update: '/salesman/update',
    deleteById: '/salesman/delete',
    patchById: '/salesman',
    getCustomMapLayers: '/salesman/get-custom-map-layers',
    addCustomMapLayer: '/salesman/add-custom-map-layer',
  },
  Team: {
    getAllByUser: '/team/get-all',
    create: '/team/create',
  },
  MlEngine: {
    district: {
      getDistrictMapData: 'ml-engine/get-district-map-data',
      getAllDistrictMapDataList: 'ml-engine/get-all-district-map-data-list'
    },
    pharmacy: {
      getPharmacyFileData: 'ml-engine/get-pharmacy-file-data',
      getPharmacyDataList: 'ml-engine/get-pharmacy-data-list',
      pharmacyDataUpload: 'ml-engine/upload-pharmacy-data',
      uploadRunPharmacyData: 'ml-engine/upload-run-pharmacy-data',
      pharmacyDataDelete: 'ml-engine/delete-pharmacy-data'
    },
    territory: {
      runTerritory: 'ml-engine/run-territory',
      fileUploadAndRunTerritory: 'ml-engine/run',
      getTerritoryData: 'ml-engine/get-territory-data',
      getAllTerritoryDataList: 'ml-engine/get-all-territory-data-list',
      versionUpdate: 'ml-engine/version-update',
      deleteRunData: 'ml-engine/delete-run',
      deleteVersionData: 'ml-engine/delete-version'
    },
    analytics: {
      getAnalyticsData: 'ml-engine/get-analytics-data',
      getAllAnalyticsDataList: 'ml-engine/get-all-analytics-data-list'
    }
  },
  s3: {
    download: 's3/download',
    modify: 's3/modify',
  },
  Utility: {
    getDistinctColors: 'utility/distinct-colors',
    getDistrictsGeoJsonData: 'utility/get-districts-geo-json-data',
  },
  Notification: {
    get: 'notification/get',
    getAll: 'notification/get-all',
    create: 'notification/create',
    update: 'notification/update',
  }
};

const AxiosInstance = axios.create({
  baseURL: ApiBaseUrl,
  timeout: +ApiMaxTimeOut || 10000,
});

AxiosInstance.interceptors.request.use(config => {
  const token = CookieStorageService.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor
AxiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      if (error.response.status === HttpStatusCode.Unauthorized) {
        // Handle Unauthorized (401) error
        console.log('Unauthorized. Redirecting to login...');
        // Optionally redirect to login or handle logout logic
        window.location.href = ClientRoutes.Admin.SignIn;
        return;

      } else if (error.response.status === HttpStatusCode.Forbidden) {
        // Handle Forbidden (403) error
        console.log('Forbidden access.');

        window.location.href = ClientRoutes.Admin.Overview;
        return;

      } else {
        // Handle other types of errors
        console.error('API Error:', error.response.data.message || error.message);
      }
    } else {
      // Handle network or other errors
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
