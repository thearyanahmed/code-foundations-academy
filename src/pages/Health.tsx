import { useEffect, useState } from 'react';

const Health = () => {
  const [healthData, setHealthData] = useState({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: 'production'
  });

  useEffect(() => {
    // Update timestamp on component mount
    setHealthData(prev => ({
      ...prev,
      timestamp: new Date().toISOString()
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="bg-card p-8 rounded-lg border shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-foreground">
          Health Check
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className="text-green-600 font-semibold">{healthData.status}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Timestamp:</span>
            <span className="text-foreground text-sm">{healthData.timestamp}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Version:</span>
            <span className="text-foreground">{healthData.version}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Environment:</span>
            <span className="text-foreground">{healthData.environment}</span>
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800 text-sm text-center">
            ✅ Application is running successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default Health;